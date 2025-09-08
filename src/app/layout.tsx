import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NavBar } from "./_components";
import { ChangeTheme } from "./_components/ChangeTheme";
import TextScrollTo from "./_components/TextScrollTo";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
      >
        <NavBar>
          <TextScrollTo scrollToId="about-me" text="About Me" />
          <TextScrollTo scrollToId="projects" text="Projects" />
          <TextScrollTo scrollToId="contact" text="Contact" />
          <ChangeTheme />
        </NavBar>

        <div id="top-of-page">{children}</div>

        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center border-t border-text">
          <TextScrollTo scrollToId="top-of-page" text="Back to Top" />
        </footer>
      </body>
    </html>
  );
}
