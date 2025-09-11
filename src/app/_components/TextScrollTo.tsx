"use client";

import { mergeCss } from "@src/utils";
import { ClassValue } from "clsx";

export interface ITextScrollToProps {
  scrollToId: string;
  text: string;
  className?: ClassValue;
}
export default function TextScrollTo(props: ITextScrollToProps) {
  const scrollToDiv = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className={mergeCss(
        "inline-block border bg-transparent p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 hover:ring-2 hover:ring-orange-500 hover:ring-inset text-shadow-sm hover:[text-shadow:1px_1px_0px_var(--color-orange-500),-1px_1px_0px_var(--color-orange-500),1px_-1px_0px_var(--color-orange-500),-1px_-1px_0px_var(--color-orange-500)]",
        props.className
      )}
      onClick={() => scrollToDiv(props.scrollToId)}
    >
      {props.text}
    </button>
  );
}
