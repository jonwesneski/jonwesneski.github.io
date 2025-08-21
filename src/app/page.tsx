import Image from "next/image";
import Contact from "./_components/Contact";
import Projects from "./_components/Projects";
import About from "./_components/About";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Connect on: <Link
                     className='inline-block my-4 border bg-transparent p-2 rounded
               focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2
               hover:ring-2 hover:ring-orange-500 hover:ring-inset text-shadow-sm hover:text-shadow-orange-500'
                     href='https://www.linkedin.com/in/jon-wesneski/'
                     target='_blank'>LinkedIn</Link>
      </footer>
    </div>
  );
}
