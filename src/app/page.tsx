import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      {/* More sections will be added here */}
    </main>
  );
}
