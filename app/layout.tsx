import type { Metadata } from "next";
import { Alegreya } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const alegreya = Alegreya({
  variable: "--font-alegreya",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Gurinovich's Portfolio",
  description: "Building AI-driven workflows, custom n8n nodes, and smart digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${alegreya.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
