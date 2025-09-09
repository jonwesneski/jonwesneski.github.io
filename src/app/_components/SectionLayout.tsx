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
        "min-h-screen flex flex-col justify-center",
        { "bg-background text-text": variant === "whiteBlack" },
        { "bg-text text-background": variant === "blackWhite" },
        props.className
      )}
    >
      <div className="max-w-xs md:max-w-2xl mx-auto py-20">
        {props.children}
      </div>
    </section>
  );
}
