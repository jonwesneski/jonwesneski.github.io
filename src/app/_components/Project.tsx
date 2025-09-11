"use client";

import { motion, Variants } from "motion/react";
import MotionTextLink, { ITextLinkProps } from "./TextLink";

const containerVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 2,
      staggerChildren: 0.1,
      delayChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { type: "tween" } },
};

interface IProjectProps {
  title: string;
  description: string;
  links: ITextLinkProps[];
}
export default function Project(props: IProjectProps) {
  return (
    <motion.div variants={containerVariants}>
      <motion.h2 variants={itemVariants} className="font-semibold my-2">
        {props.title}
      </motion.h2>
      <motion.p variants={itemVariants} className="ml-2 whitespace-pre-line">
        {props.description}
      </motion.p>
      {props.links.map((l) => {
        return (
          <MotionTextLink
            key={l.href}
            href={l.href}
            text={l.text}
            targetBlank={l.targetBlank}
            className="mx-2 mt-3"
            variants={itemVariants}
          />
        );
      })}
    </motion.div>
  );
}
