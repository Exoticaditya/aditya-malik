# Aditya Malik - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. This website showcases projects, skills, education, certifications, and provides a way to get in touch.

## 🚀 Features

### 🎨 **Modern Design & User Experience**
- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Navigation**: Fixed navigation bar with smooth scrolling
- **Mobile-First**: Optimized mobile experience with hamburger menu
- **Clean UI/UX**: Modern design using Tailwind CSS

### 📱 **Sections Included**
- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About Section**: Personal introduction with achievement statistics
- **Technical Skills**: Interactive skill bars organized by categories
- **Projects**: Showcase of featured and other projects with details
- **Education**: Academic background and online learning
- **Certifications**: Professional certifications with verification badges
- **Contact**: Interactive contact form and social media links

### 🔧 **Technical Features**
- **Next.js 15**: Latest version with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS 4**: Modern utility-first CSS framework
- **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards
- **PWA Ready**: Web manifest and favicon included
- **Performance**: Static generation for optimal loading speed

## 🛠️ **Tech Stack**

- **Framework**: Next.js 15.5.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: SVG icons and emojis
- **Deployment**: Vercel (recommended)

## 📦 **Getting Started**

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Exoticaditya/aditya-malik.git
cd aditya-malik
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

### Build for Production

```bash
npm run build
npm start
```

## 📁 **Project Structure**

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx           # Main page
│   ├── globals.css        # Global styles
│   └── favicon.ico        # Default favicon
├── components/
│   ├── Navigation.tsx     # Navigation component
│   └── sections/          # Individual section components
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Education.tsx
│       ├── Certifications.tsx
│       └── Contact.tsx
public/
├── favicon.svg            # Custom SVG favicon
├── site.webmanifest      # Web app manifest
└── [other assets]
```

## 🎨 **Customization**

### Update Personal Information
1. **Content**: Edit the section components in `src/components/sections/`
2. **Metadata**: Update `src/app/layout.tsx` for SEO and social media
3. **Styling**: Modify Tailwind classes or `src/app/globals.css`

### Add New Sections
1. Create a new component in `src/components/sections/`
2. Import and add it to `src/app/page.tsx`
3. Update navigation in `src/components/Navigation.tsx`

## 📱 **Mobile Responsiveness**

The website is fully responsive with:
- Hamburger menu for mobile devices
- Touch-friendly button sizes
- Optimized typography scaling
- Responsive grid layouts

## 🔍 **SEO Features**

- Comprehensive meta tags
- Open Graph support for social media sharing
- Twitter Card support
- Structured data markup
- Custom favicon and web manifest
- Performance optimized

## 📝 **Scripts**

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 **Deployment**

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
The built files in `.next` folder can be deployed to any hosting platform that supports Node.js.

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 **Author**

**Aditya Malik**
- Portfolio: [Live Demo](https://adityamalik.dev)
- LinkedIn: [aditya-malik](https://linkedin.com/in/adityamalik)
- GitHub: [Exoticaditya](https://github.com/Exoticaditya)
- Email: aditya.malik@example.com

---

⭐ Star this repository if you found it helpful!
