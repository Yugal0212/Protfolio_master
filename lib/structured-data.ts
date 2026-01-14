import { siteConfig } from './site-config'

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  url: 'https://protfolio-master.vercel.app',
  image: 'https://protfolio-master.vercel.app/og-image.png',
  sameAs: [
    siteConfig.socials.github,
    siteConfig.socials.linkedin,
  ],
  jobTitle: siteConfig.role,
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance'
  },
  description: siteConfig.summary,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rajkot',
    addressRegion: 'Gujarat',
    addressCountry: 'IN'
  },
  email: siteConfig.email,
  telephone: siteConfig.phone,
  knowsAbout: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'MongoDB',
    'Express.js',
    'Full Stack Development',
    'Web Development',
    'MERN Stack'
  ]
}
