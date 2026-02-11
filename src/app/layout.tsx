import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://vanurmedia.com'),
  title: {
    default: "Vanur Media - Digital Marketing & Web Development Agency",
    template: "%s | Vanur Media"
  },
  description: "Vanur Media is a leading web development agency specializing in custom web applications , mobile apps, SEO optimization, and innovative digital solutions for businesses worldwide.",
  keywords: [
    "digital marketing agency",
    "web development",
    "mobile app development",
    "SEO services",
    "custom software development",
    "UI/UX design",
    "e-commerce solutions",
    "cloud services",
    "digital transformation",
    "Vanur Media"
  ],
  authors: [{ name: "Vanur Media", url: "https://vanurmedia.com" }],
  creator: "Vanur Media",
  publisher: "Vanur Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vanurmedia.com",
    siteName: "Vanur Media",
    title: "Vanur Media - Digital Marketing & Web Development Agency",
    description: "Transform your digital presence with Vanur Media. Expert web development, mobile apps, SEO, and innovative digital solutions tailored for your business growth.",
    images: [
      {
        url: "/images/logo-1.png",
        width: 1200,
        height: 630,
        alt: "Vanur Media - Digital Solutions",
      }
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@vanurmedia",
    creator: "@vanurmedia",
    title: "Vanur Media - Digital Marketing & Web Development Agency",
    description: "Transform your digital presence with expert web development, mobile apps, SEO, and innovative digital solutions.",
    images: ["/images/logo-1.png"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  // Manifest
  manifest: "/manifest.json",

  // Verification
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },

  // Alternate Languages
  alternates: {
    canonical: "https://vanurmedia.com",
    languages: {
      'en-US': 'https://vanurmedia.com',
    },
  },

  // Category
  category: "technology",
};

// Viewport Configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0B0011' }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vanur Media",
    url: "https://vanurmedia.com",
    logo: "https://vanurmedia.com/images/logo.png",
    description: "Leading digital marketing and web development agency specializing in custom web applications, mobile apps, and SEO optimization.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US"
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["English"]
    },
    sameAs: [
      "https://facebook.com/vanurmedia",
      "https://twitter.com/vanurmedia",
      "https://linkedin.com/company/vanurmedia",
      "https://instagram.com/vanurmedia"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Vanur Media",
    url: "https://vanurmedia.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://vanurmedia.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="http://localhost:8080" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://backend.vanurmedia.com" />
      </head>
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <Navbar />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
