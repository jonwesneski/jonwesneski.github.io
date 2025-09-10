import About from "./_components/About";
import Contact from "./_components/Contact";
import Projects from "./_components/Projects";
import SectionLayout from "./_components/SectionLayout";

export default function Home() {
  return (
    <main>
      <SectionLayout id="about-me" variant="default">
        <About />
      </SectionLayout>
      <SectionLayout id="projects" variant="gradient">
        <Projects />
      </SectionLayout>
      <SectionLayout id="contact" variant="default">
        <Contact />
      </SectionLayout>
    </main>
  );
}
