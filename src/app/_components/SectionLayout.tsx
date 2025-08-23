"use client";

import { mergeCss } from "@src/utils";
import { ClassValue } from "clsx";

type Variant = "whiteBlack" | "blackWhite";
interface ISectionLayoutProps {
  id: string;
  children: React.ReactNode;
  className?: ClassValue;
  variant?: Variant;
}
export default function SectionLayout({
  variant = "whiteBlack",
  ...props
}: ISectionLayoutProps) {
  return (
    <section
      id={props.id}
      className={mergeCss(
        "min-h-screen flex flex-col justify-center p-20",
        { "bg-background text-text": variant === "whiteBlack" },
        { "bg-text text-background": variant === "blackWhite" },
        props.className
      )}
    >
      {props.children}
    </section>
  );
}
