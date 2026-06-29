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
export const metadata = {
  title: 'PureAI Directory - Find the Best AI Tools',
  description: 'Explore the ultimate directory of market-leading AI tools, complete with pricing, versions, and ratings.',
  keywords: ['PureAI Directory', 'AI tools', 'AI directory', 'ChatGPT', 'Claude'],
  verification: {
    google: '6e2wZl3hKJqCzedG5XRuWvC6ZGnvCXWLPftJGHCAlr8', // <-- Paste your exact code string here
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
