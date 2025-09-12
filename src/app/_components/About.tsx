"use client";

import { Variants, motion } from "motion/react";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      delay: 2,
      staggerChildren: 0.1,
      delayChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const helloVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { type: "tween", duration: 1.5 } },
};

const nameVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { type: "tween", delay: 1.5 } },
};

const itemsParentVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      delay: 0.5,
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

export default function About() {
  return (
    <>
      <div className="m-auto flex flex-col items-center">
        <motion.h1
          variants={helloVariants}
          initial="hidden"
          animate="visible"
          className="my-2 text-4xl font-bold"
        >
          Hi, I am{" "}
        </motion.h1>

        <motion.h1
          variants={nameVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl bg-linear-to-br bg-clip-text text-transparent from-orange-500 via-yellow-500 to-orange-500 font-extrabold"
        >
          Jon Wesneski
        </motion.h1>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-2xl font-bold my-2 text-white-black"
        >
          About Me
        </motion.h1>

        <div className="relative w-[150px] h-[280px] md:w-[300px] md:h-[500px] float-right ml-3 mb-3 border-8 border-text">
          <Image
            src="/jon-wesneski.jpg"
            alt="the sweet boy - Jon Wesneski of 37"
            fill
            priority
            className="object-cover"
          />
        </div>
        <motion.div variants={itemsParentVariants}>
          <motion.p variants={itemVariants} className="my-2">
            As a Fullstack Developer and seasoned Software Development Engineer
            in Test (SDET), I specialize in building robust, scalable web
            applications with a keen eye for quality and maintainability.
            Leveraging expertise across frontend frameworks and backend
            technologies, I design and deliver end-to-end solutions that not
            only meet business goals but also uphold the highest standards of
            reliability and performance.
          </motion.p>
          <motion.p variants={itemVariants} className="my-2">
            My approach integrates development best practices with quality
            engineering principles — from clean, modular code to comprehensive
            automated testing and continuous integration/deployment pipelines. I
            believe quality starts with thoughtful design and is ensured through
            meticulous testing, monitoring, and collaboration with
            cross-functional teams.
          </motion.p>
          <motion.p variants={itemVariants} className="my-2">
            Passionate about crafting seamless user experiences and resilient
            systems, I thrive on solving complex problems and driving innovation
            in fast-paced environments. Whether working on new feature
            development or empowering test automation strategies, I consistently
            focus on delivering high-impact software that scales efficiently and
            performs flawlessly.
          </motion.p>
          <motion.p variants={itemVariants} className="my-2">
            Let&apos;s connect if you want to collaborate on building
            high-quality, full-stack software solutions that combine strong
            engineering with automated quality assurance.
          </motion.p>
        </motion.div>
      </motion.div>
    </>
  );
}
