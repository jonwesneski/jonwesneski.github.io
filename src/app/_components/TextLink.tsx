"use client";

import { mergeCss } from "@src/utils";
import { ClassValue } from "clsx";
import Link from "next/link";

export interface ILinkProps {
  href: string;
  text: string;
  targetBlank: boolean;
  className?: ClassValue;
}
export default function Project(props: ILinkProps) {
  return (
    <Link
      key={props.href}
      className={mergeCss(
        "inline-block border bg-transparent p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 hover:ring-2 hover:ring-orange-500 hover:ring-inset text-shadow-sm hover:[text-shadow:1px_1px_0px_var(--color-orange-500),-1px_1px_0px_var(--color-orange-500),1px_-1px_0px_var(--color-orange-500),-1px_-1px_0px_var(--color-orange-500)]",
        props.className
      )}
      href={props.href}
      target={props.targetBlank ? "_blank" : undefined}
    >
      {props.text}
    </Link>
  );
}
