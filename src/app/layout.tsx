import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NavBar } from "./_components";
import { ChangeTheme } from "./_components/ChangeTheme";
import TextLink from "./_components/TextLink";
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
          <TextLink href="/#about-me" text="About Me" targetBlank={false} />
          <TextLink href="/#projects" text="Projects" targetBlank={false} />
          <TextLink href="/#contact" text="contact" targetBlank={false} />
          <ChangeTheme />
        </NavBar>

        {children}

        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          Connect on:{" "}
          <TextLink
            href="https://www.linkedin.com/in/jon-wesneski/"
            targetBlank
            text="LinkedIn"
          />
        </footer>
      </body>
    </html>
  );
}
