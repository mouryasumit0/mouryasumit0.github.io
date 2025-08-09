# Sumit Mourya - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- ⚡ Fast loading with Next.js optimizations
- 🎭 Smooth animations with Framer Motion
- 🌙 Dark/Light mode support (coming soon)
- 📧 Contact form with EmailJS integration
- 📈 SEO optimized
- 🔒 TypeScript for type safety

## Tech Stack

- **Framework:** Next.js 15.4.6
- **Language:** TypeScript
- **Runtime:** React 19
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sumitmourya/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Edit the data in `src/data/portfolio.ts` to customize:

- Personal details (name, role, contact info)
- Skills and technologies
- Work experience
- Projects
- Social media links

### Adding Your Resume

1. Add your resume PDF to `public/resume/`
2. Update the `resumeUrl` in `src/data/portfolio.ts`

### Adding Your Profile Photo

1. Add your profile image to `public/images/`
2. Update the `profileImage` path in `src/data/portfolio.ts`
3. Uncomment the Image component in `src/components/Hero.tsx`

### Adding Project Images

1. Add project screenshots to `public/images/projects/`
2. Update the image paths in your project data

## Deployment

### Deploy on Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Hero.tsx
│   └── Navigation.tsx
├── data/
│   └── portfolio.ts
├── types/
│   └── index.ts
└── utils/
```

## Sections Included

- [x] Hero/Landing
- [x] About
- [x] Skills
- [ ] Projects (coming next)
- [ ] Experience (coming next)
- [ ] Contact Form (coming next)
- [ ] Footer (coming next)

## Contributing

Feel free to fork this project and customize it for your own portfolio!

## License

This project is licensed under the MIT License.

## Contact

Sumit Mourya - [your-email@example.com](mailto:your-email@example.com)

Project Link: [https://github.com/sumitmourya/portfolio](https://github.com/sumitmourya/portfolio)
