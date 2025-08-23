import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { NavBar } from "./_components";
import { ChangeTheme } from "./_components/ChangeTheme";
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
  title: "Jon Wesneski",
  description: "Jon Wesneski: Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar>
          <Link href="/#about-me">About Me</Link>
          <Link href="/#about-me">Projects</Link>
          <Link href="/#contact">Contact</Link>
          <ChangeTheme />
        </NavBar>
        {children}
      </body>
    </html>
  );
}
