"use client";
import Image from "next/image";

export default function About() {
  return (
    <>
      <h1 className="text-2xl font-bold my-2 text-white-black">About Me</h1>
      <p className="my-2">
        Hi, I am{" "}
        <span className="bg-linear-to-br bg-clip-text text-transparent from-orange-500 via-yellow-500 to-orange-500 font-extrabold">
          Jon Wesneski
        </span>
      </p>

      <div className="relative w-[150px] h-[280px] md:w-[300px] md:h-[500px] float-right ml-3 mb-3 border-8 border-text">
        <Image
          src="/jon-wesneski.jpg"
          alt="the sweet boy - Jon Wesneski of 37"
          fill
          priority
          className="object-cover"
        />
      </div>
      <p className="my-2">
        As a Fullstack Developer and seasoned Software Development Engineer in
        Test (SDET), I specialize in building robust, scalable web applications
        with a keen eye for quality and maintainability. Leveraging expertise
        across frontend frameworks and backend technologies, I design and
        deliver end-to-end solutions that not only meet business goals but also
        uphold the highest standards of reliability and performance.
      </p>
      <p className="my-2">
        My approach integrates development best practices with quality
        engineering principles — from clean, modular code to comprehensive
        automated testing and continuous integration/deployment pipelines. I
        believe quality starts with thoughtful design and is ensured through
        meticulous testing, monitoring, and collaboration with cross-functional
        teams.
      </p>
      <p className="my-2">
        Passionate about crafting seamless user experiences and resilient
        systems, I thrive on solving complex problems and driving innovation in
        fast-paced environments. Whether working on new feature development or
        empowering test automation strategies, I consistently focus on
        delivering high-impact software that scales efficiently and performs
        flawlessly.
      </p>
      <p className="my-2">
        Let&apos;s connect if you want to collaborate on building high-quality,
        full-stack software solutions that combine strong engineering with
        automated quality assurance.
      </p>
    </>
  );
}
