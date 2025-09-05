import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://adityamalik.dev"),
  title: {
    default: "Aditya Malik | Portfolio",
    template: "%s | Aditya Malik"
  },
  description: "Portfolio website of Aditya Malik - Software Developer showcasing projects, skills, and experience",
  keywords: [
    "Aditya Malik",
    "Software Developer",
    "Full Stack Developer",
    "Portfolio",
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Frontend Developer",
    "Backend Developer"
  ],
  authors: [{ name: "Aditya Malik", url: "https://adityamalik.dev" }],
  creator: "Aditya Malik",
  publisher: "Aditya Malik",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adityamalik.dev",
    title: "Aditya Malik | Portfolio",
    description: "Portfolio website of Aditya Malik - Software Developer showcasing projects, skills, and experience",
    siteName: "Aditya Malik Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aditya Malik - Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Malik | Portfolio",
    description: "Portfolio website of Aditya Malik - Software Developer showcasing projects, skills, and experience",
    creator: "@adityamalik",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
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
