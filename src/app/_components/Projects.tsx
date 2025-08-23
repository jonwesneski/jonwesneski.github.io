import Project from "./Project";

export default function Projects() {
  return (
    <section>
      <h1 className="font-bold my-2">Projects</h1>
      <Project
        title="Recipehall"
        description="A social media app for recipes"
        links={[
          {
            href: "https://recipes-ui-tau.vercel.app/",
            text: "Live App",
            targetBlank: true,
          },
          {
            href: "https://github.com/jonwesneski/recipes-js",
            text: "Code",
            targetBlank: true,
          },
        ]}
      />
      <Project
        title="end²"
        description="A Test Runner that allows you to run tests some tests parallel and some sequentially and lets you set your own custom args when starting a test run"
        links={[
          {
            href: "https://github.com/jonwesneski/end2",
            text: "Code",
            targetBlank: true,
          },
        ]}
      />
    </section>
  );
}
