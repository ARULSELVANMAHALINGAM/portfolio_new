import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARUL SELVAN K M | Full-Stack & AI Engineer",
  description: "Portfolio of ARUL SELVAN K M — Full-Stack Developer & AI/ML Engineer. Explore projects, achievements, and certifications.",
  keywords: [
    "ARUL SELVAN K M",
    "Arul Selvan K M",
    "Arul Selvan",
    "Full-Stack Developer",
    "AI Engineer",
    "Machine Learning Engineer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Software Engineer India",
  ],
  metadataBase: new URL('https://portfolio-smoky-seven-19.vercel.app'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "ARUL SELVAN K M | Full-Stack & AI Engineer",
    description: "Portfolio of ARUL SELVAN K M — Full-Stack Developer & AI/ML Engineer.",
    type: 'website',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ARUL SELVAN K M | Full-Stack & AI Engineer",
    description: "Portfolio of ARUL SELVAN K M — Full-Stack Developer & AI/ML Engineer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=JetBrains+Mono:wght@100..800&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: `
          :root {
            --font-inter: 'Inter', sans-serif;
            --font-jetbrains-mono: 'JetBrains Mono', monospace;
          }
        `}} />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'ARUL SELVAN K M',
              jobTitle: 'Full-Stack Developer & AI/ML Engineer',
              url: 'https://portfolio-smoky-seven-19.vercel.app',
              email: 'mailto:arulselvanmahalingam@gmail.com',
              sameAs: [
                'https://github.com/ARULSELVANMAHALINGAM',
                'https://www.linkedin.com/in/arulselvanmahalingam',
              ],
              knowsAbout: [
                'Full-Stack Development',
                'Artificial Intelligence',
                'Machine Learning',
                'React',
                'Next.js',
                'Cloud Computing',
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
