"use client";

import TextLink, { ITextLinkProps } from "./TextLink";

interface IProjectProps {
  title: string;
  description: string;
  links: ITextLinkProps[];
}
export default function Project(props: IProjectProps) {
  return (
    <div>
      <h2 className="font-semibold my-2">{props.title}</h2>
      <p className="ml-2 whitespace-pre-line">{props.description}</p>
      {props.links.map((l) => {
        return (
          <TextLink
            key={l.href}
            href={l.href}
            text={l.text}
            targetBlank={l.targetBlank}
            className="mx-2 mt-3"
          />
        );
      })}
    </div>
  );
}
