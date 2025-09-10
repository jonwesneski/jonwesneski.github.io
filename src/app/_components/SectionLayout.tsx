"use client";

import { mergeCss } from "@src/utils";
import { ClassValue } from "clsx";

type Variant = "default" | "gradient";
interface ISectionLayoutProps {
  id: string;
  children: React.ReactNode;
  className?: ClassValue;
  variant?: Variant;
}
export default function SectionLayout({
  variant = "default",
  ...props
}: ISectionLayoutProps) {
  return (
    <section
      id={props.id}
      className={mergeCss(
        "min-h-screen flex flex-col justify-center bg-background text-text",
        {
          "animate-moving-bg bg-[conic-gradient(at_top_right,_var(--background-from),_var(--background-via),_var(--background-to))] backdrop-blur-md std-backdrop-blur bg-[length:200%_200%]":
            variant === "gradient",
        },
        props.className
      )}
    >
      <div className="max-w-xs md:max-w-2xl mx-auto py-20">
        {props.children}
      </div>
    </section>
  );
}
