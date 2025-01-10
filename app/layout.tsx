import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Merriweather, Poppins } from 'next/font/google';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
  fallback: ['serif'],
  preload: true,
});
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  fallback: ['sans-serif'],
  preload: true,
});

export const metadata: Metadata = {
  title: "Grand Versatiles Holding (GVH) | Premium Glass Packaging Solutions",
  description: "Leading glass packaging manufacturer in Southeast Asia. Specializing in innovative design, custom solutions, and premium glass packaging for various industries. Quality assured manufacturing excellence.",
  keywords: "glass packaging, custom glass solutions, premium packaging, Southeast Asia, manufacturing excellence, innovative design, quality assurance, sustainable packaging",
  authors: [{ name: "Grand Versatiles Holding (GVH)" }],
  icons: {
    icon: '/mainlogo.ico',
    shortcut: '/mainlogo.ico',
    apple: '/mainlogo.ico',
  },
  openGraph: {
    title: "Grand Versatiles Holding (GVH) | Premium Glass Packaging Solutions",
    description: "Leading glass packaging manufacturer in Southeast Asia. Innovative design, custom solutions, and premium glass packaging for various industries.",
    type: "website",
    locale: "en_US",
    siteName: "Grand Versatiles Holding (GVH)"
  },
  twitter: {
    card: "summary_large_image",
    title: "Grand Versatiles Holding (GVH) | Premium Glass Packaging",
    description: "Leading glass packaging manufacturer in Southeast Asia. Innovative design and custom solutions."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${merriweather.variable} ${poppins.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/mainlogo.ico" sizes="any" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
