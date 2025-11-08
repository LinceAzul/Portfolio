# Personal Portfolio Website

A modern, professional, one-page portfolio website built with Next.js, TypeScript, and Tailwind CSS. Perfect for showcasing your experience, projects, education, and skills in cybersecurity and AI.

## Features

- 🎨 **Modern Design**: Sleek, minimal, and professional with glass effects and smooth animations
- 📱 **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- 🌙 **Dark Mode**: Automatic dark mode support based on system preferences
- ⚡ **Performance**: Built with Next.js 14+ for optimal performance and SEO
- 🎭 **Animations**: Smooth scroll animations using Framer Motion
- 🔍 **SEO Optimized**: Proper metadata and semantic HTML
- ♿ **Accessible**: Built with accessibility best practices
- 🎯 **One-Page Design**: Smooth scrolling navigation between sections

## Sections

The portfolio includes the following sections (in order):

1. **Hero** - Landing section with introduction
2. **Experience** - Professional experience with timeline view
3. **Projects** - Featured projects with images and links
4. **Education** - Academic background with timeline
5. **Certifications** - Professional certifications and credentials
6. **Languages** - Language proficiency with visual indicators
7. **About Me** - Personal information and skills
8. **Contact** - Contact form and social links

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Customization

### Adding Your Data

All content is stored in the `data/` directory. Update the following files with your information:

#### 1. Personal Information (`data/about.ts`)
- Update your name, title, bio, location, and contact information
- Add your social media links
- Update your skills list
- Add a profile image (place it in `public/profile.jpg`)

#### 2. Experience (`data/experience.ts`)
```typescript
export const experiences: Experience[] = [
  {
    id: "1",
    company: "Company Name",
    position: "Your Position",
    location: "Location",
    startDate: "2024-01",
    endDate: null, // or "2024-12" for past positions
    current: true, // set to true for current position
    description: [
      "Achievement or responsibility 1",
      "Achievement or responsibility 2",
    ],
    technologies: ["React", "TypeScript", "Node.js"],
  },
];
```

#### 3. Projects (`data/projects.ts`)
```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Project Name",
    description: "Short description",
    longDescription: "Detailed description of the project",
    image: "/projects/project1.jpg", // Place images in public/projects/
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    codeUrl: "https://github.com/username/project",
    demoUrl: "https://project-demo.com",
    docsUrl: "https://project-docs.com", // optional
    featured: true,
  },
];
```

#### 4. Education (`data/education.ts`)
```typescript
export const education: Education[] = [
  {
    id: "1",
    institution: "University Name",
    degree: "Bachelor of Science",
    field: "Computer Science",
    location: "City, Country",
    startDate: "2020-09",
    endDate: "2024-06",
    description: ["Relevant coursework", "Honors"],
    gpa: "3.8/4.0", // optional
  },
];
```

#### 5. Certifications (`data/certifications.ts`)
```typescript
export const certifications: Certification[] = [
  {
    id: "1",
    name: "Certification Name",
    issuer: "Issuing Organization",
    issueDate: "2024-01",
    expirationDate: "2027-01", // or null if no expiration
    credentialId: "ABC123", // optional
    credentialUrl: "https://verification-url.com", // optional
    technologies: ["Technology 1", "Technology 2"], // optional
  },
];
```

#### 6. Languages (`data/languages.ts`)
```typescript
export const languages: Language[] = [
  {
    id: "1",
    name: "English",
    level: "Fluent", // Native, Fluent, Advanced, Intermediate, Basic
    proficiency: 95, // 0-100
  },
];
```

#### 7. Contact (`data/contact.ts`)
- Update contact information and social links

### Adding Images

1. **Profile Image**: Place your profile photo at `public/profile.jpg`
2. **Project Images**: Place project images in `public/projects/` directory
3. **Favicon**: Update `app/favicon.ico` with your favicon

### Styling

The project uses Tailwind CSS for styling. You can customize:

- **Colors**: Modify color classes in components (blue, purple, gray, etc.)
- **Animations**: Adjust animation settings in `app/globals.css`
- **Layout**: Modify section spacing and layouts in component files

### SEO Configuration

Update SEO metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your portfolio description",
  keywords: ["your", "keywords"],
  // ... more metadata
};
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with Navbar
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Section.tsx         # Reusable section wrapper
│   ├── Timeline.tsx        # Timeline component
│   ├── ProjectCard.tsx     # Project card component
│   └── sections/           # Section components
│       ├── ExperienceSection.tsx
│       ├── ProjectsSection.tsx
│       ├── EducationSection.tsx
│       ├── CertificationsSection.tsx
│       ├── LanguagesSection.tsx
│       ├── AboutSection.tsx
│       └── ContactSection.tsx
├── data/                   # Data files
│   ├── about.ts
│   ├── experience.ts
│   ├── projects.ts
│   ├── education.ts
│   ├── certifications.ts
│   ├── languages.ts
│   └── contact.ts
├── public/                 # Static assets
│   └── projects/           # Project images
└── package.json
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Self-hosted server

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **React Icons** - Additional icons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Support

If you have any questions or need help customizing your portfolio, please feel free to open an issue or reach out.

---

Built with ❤️ using Next.js and Tailwind CSS
