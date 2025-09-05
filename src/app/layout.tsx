import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya Malik | Portfolio",
  description: "Portfolio website of Aditya Malik - Software Developer showcasing projects, skills, and experience",
  keywords: "Aditya Malik, Software Developer, Portfolio, Web Development, React, Next.js",
  authors: [{ name: "Aditya Malik" }],
  robots: "index, follow",
  openGraph: {
    title: "Aditya Malik | Portfolio",
    description: "Portfolio website of Aditya Malik - Software Developer showcasing projects, skills, and experience",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Malik | Portfolio",
    description: "Portfolio website of Aditya Malik - Software Developer showcasing projects, skills, and experience",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
