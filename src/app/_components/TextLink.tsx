"use client";

import { mergeCss } from "@src/utils";
import { ClassValue } from "clsx";
import { motion, Variants } from "motion/react";
import Link from "next/link";
import React from "react";

export interface ITextLinkProps {
  href: string;
  text: string;
  targetBlank: boolean;
  className?: ClassValue;
  variants?: Variants;
}
const TextLink = React.forwardRef<HTMLAnchorElement, ITextLinkProps>(
  ({ text, targetBlank, ...props }, ref) => (
    <Link
      {...props}
      className={mergeCss(
        "inline-block border bg-transparent p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 hover:ring-2 hover:ring-orange-500 hover:ring-inset text-shadow-sm hover:[text-shadow:1px_1px_0px_var(--color-orange-500),-1px_1px_0px_var(--color-orange-500),1px_-1px_0px_var(--color-orange-500),-1px_-1px_0px_var(--color-orange-500)]",
        props.className
      )}
      ref={ref}
      target={targetBlank ? "_blank" : undefined}
    >
      {text}
    </Link>
  )
);
const MotionTextLink = motion.create(TextLink);

export default MotionTextLink;
