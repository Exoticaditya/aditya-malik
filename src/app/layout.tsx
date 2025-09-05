import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya Malik - Java Full Stack Developer",
  description: "Motivated B. Tech (CSE) student with hands-on experience in full-stack development using Java, Spring Boot, and React.js. Portfolio showcasing projects and skills.",
  keywords: ["Aditya Malik", "Java Developer", "Full Stack Developer", "React", "Spring Boot", "Portfolio"],
  authors: [{ name: "Aditya Malik" }],
  creator: "Aditya Malik",
  publisher: "Aditya Malik",
  openGraph: {
    title: "Aditya Malik - Java Full Stack Developer",
    description: "Motivated B. Tech (CSE) student with hands-on experience in full-stack development using Java, Spring Boot, and React.js.",
    type: "website",
    locale: "en_US",
    url: "https://aditya-malik.vercel.app",
    siteName: "Aditya Malik Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Malik - Java Full Stack Developer",
    description: "Motivated B. Tech (CSE) student with hands-on experience in full-stack development using Java, Spring Boot, and React.js.",
  },
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
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}