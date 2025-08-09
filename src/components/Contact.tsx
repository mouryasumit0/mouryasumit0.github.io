'use client';

import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

type FormValues = {
  name: string;
  email: string;
  message: string;
  honeyPot?: string;
};

type Notice = {
  type: 'success' | 'error' | 'info';
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const [notice, setNotice] = useState<Notice | null>(null);

  // Auto dismiss notice after 5s
  useEffect(() => {
    if (!notice) return;
    const id = setTimeout(() => setNotice(null), 5000);
    return () => clearTimeout(id);
  }, [notice]);

  const config = useMemo(() => ({
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  }), []);

  const onSubmit = async (data: FormValues) => {
    // Honeypot: if filled, treat as bot and pretend success without sending
    if (data.honeyPot && data.honeyPot.trim().length > 0) {
      reset();
      setNotice({ type: 'success', message: 'Thanks! Your message has been submitted.' });
      return;
    }

    // If EmailJS env vars are not configured, simulate success with notice
    if (!config.serviceId || !config.templateId || !config.publicKey) {
      reset();
      setNotice({ type: 'info', message: 'Message submitted locally. Configure EmailJS to receive emails.' });
      return;
    }

    try {
      await emailjs.send(
        config.serviceId as string,
        config.templateId as string,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          reply_to: data.email,
        },
        { publicKey: config.publicKey as string }
      );
      reset();
      setNotice({ type: 'success', message: 'Your message has been sent successfully. I’ll get back to you soon!' });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('EmailJS error', e);
      setNotice({ type: 'error', message: 'Something went wrong while sending. Please try again later.' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact</h2>
          <p className="text-gray-600 dark:text-gray-300">Have a project in mind or want to collaborate? Send a message.</p>
        </motion.div>

        {/* Notice */}
        {notice && (
          <div
            role="status"
            aria-live="polite"
            className={`mb-4 rounded-lg border p-4 text-sm ${
              notice.type === 'success'
                ? 'border-green-200 bg-green-50 text-green-800 dark:border-green-900/40 dark:bg-green-900/30 dark:text-green-200'
                : notice.type === 'error'
                ? 'border-red-200 bg-red-50 text-red-800 dark:border-red-900/40 dark:bg-red-900/30 dark:text-red-200'
                : 'border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-900/40 dark:bg-blue-900/30 dark:text-blue-200'
            }`}
          >
            {notice.message}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          {/* Honeypot field (hidden from users) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register('honeyPot')} />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input
              id="name"
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-primary-500 focus:ring-primary-500"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              id="email"
              type="email"
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-primary-500 focus:ring-primary-500"
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /[^@\s]+@[^@\s]+\.[^@\s]+/, message: 'Enter a valid email' },
              })}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              id="message"
              rows={5}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-primary-500 focus:ring-primary-500"
              {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Please write at least 10 characters' } })}
            />
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-500">{config.publicKey ? 'EmailJS enabled' : 'EmailJS not configured — message will not be sent but form will reset.'}</p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:opacity-60 text-white rounded-lg font-semibold"
            >
              {isSubmitting ? 'Sending…' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
