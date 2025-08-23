"use client";

import Link from "next/link";

interface ILink {
  href: string;
  text: string;
}

interface IProjectProps {
  title: string;
  description: string;
  links: ILink[];
}
export default function Project(props: IProjectProps) {
  return (
    <div>
      <h2 className="font-semibold my-2">{props.title}</h2>
      <p className="ml-2 text-shadow-orange-500">{props.description}</p>
      {props.links.map((l) => {
        return (
          <Link
            key={l.href}
            className="inline-block my-4 border bg-transparent p-2 rounded
               focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2
               hover:ring-2 hover:ring-orange-500 hover:ring-inset text-shadow-sm hover:text-shadow-orange-500"
            href={l.href}
            target="_blank"
          >
            {l.text}
          </Link>
        );
      })}
    </div>
  );
}
