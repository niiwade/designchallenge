import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

import Footer from "@/components/Footer";


const montreal =localFont({src:'../../font/PPNeueMontreal-Medium.otf'})

export const metadata: Metadata = {
  title: "Design Challenge by Join Valley",
  description: "Design Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montreal.className}>
        {children}</body>
        <Footer/>
    </html>
  );
}
