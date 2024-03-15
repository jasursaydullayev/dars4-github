import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
const space = Space_Mono({
  weight: ['400', '700'],
  style: ['normal'],
  display: "swap",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={space.className}>{children}</body>
    </html>
  );
}
