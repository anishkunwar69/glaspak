import type { Metadata } from "next";
import { Merriweather, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GLASPAK SOLUTIONS SDN BHD",
  description:
    "Leading glass packaging manufacturer in Southeast Asia. Specializing in innovative design, custom solutions, and premium glass packaging for various industries. Quality assured manufacturing excellence.",
  keywords:
    "glass packaging, custom glass solutions, premium packaging, Southeast Asia, manufacturing excellence, innovative design, quality assurance, sustainable packaging",
  authors: [{ name: "GLASPAK SOLUTIONS SDN BHD" }],
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.ico",
  },
  openGraph: {
    title: "GLASPAK SOLUTIONS SDN BHD",
    description:
      "Leading glass packaging manufacturer in Southeast Asia. Innovative design, custom solutions, and premium glass packaging for various industries.",
    type: "website",
    locale: "en_US",
    siteName: "GLASPAK SOLUTIONS SDN BHD",
  },
  twitter: {
    card: "summary_large_image",
    title: "GLASPAK SOLUTIONS SDN BHD",
    description:
      "Leading glass packaging manufacturer in Southeast Asia. Innovative design and custom solutions.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${merriweather.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/logo.ico" sizes="any" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
