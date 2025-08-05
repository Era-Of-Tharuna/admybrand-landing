import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite – Supercharge Your Marketing with AI",
  description: "Supercharge your marketing with ADmyBRAND AI Suite: AI-powered automation, analytics, and creative tools for modern marketers.",
  openGraph: {
    title: "ADmyBRAND AI Suite – Supercharge Your Marketing with AI",
    description: "Supercharge your marketing with ADmyBRAND AI Suite: AI-powered automation, analytics, and creative tools for modern marketers.",
    images: ["/file.svg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADmyBRAND AI Suite – Supercharge Your Marketing with AI",
    description: "Supercharge your marketing with ADmyBRAND AI Suite: AI-powered automation, analytics, and creative tools for modern marketers.",
    images: ["/file.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');`
        }} />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
