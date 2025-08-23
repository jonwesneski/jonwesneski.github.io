import Link from "next/link";
import About from "./_components/About";
import Contact from "./_components/Contact";
import Projects from "./_components/Projects";
import SectionLayout from "./_components/SectionLayout";

export default function Home() {
  return (
    <div>
      <main>
        <SectionLayout id="about-me" variant="whiteBlack">
          <About />
        </SectionLayout>
        <SectionLayout id="projects" variant="blackWhite">
          <Projects />
        </SectionLayout>
        <SectionLayout id="contact" variant="whiteBlack">
          <Contact />
        </SectionLayout>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Connect on:{" "}
        <Link
          className="inline-block my-4 border bg-transparent p-2 rounded
               focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2
               hover:ring-2 hover:ring-orange-500 hover:ring-inset text-shadow-sm hover:text-shadow-orange-500"
          href="https://www.linkedin.com/in/jon-wesneski/"
          target="_blank"
        >
          LinkedIn
        </Link>
      </footer>
    </div>
  );
}
