import Project from "./Project";

export default function Projects() {
  return (
    <section>
      <h1 className="text-2xl font-bold my-2 text-black-white">Projects</h1>
      <div className="flex flex-col gap-10">
        <Project
          title="Recipehall"
          description={`A social media app for recipes. This app is still in early stage but currently:
          - Anyone can create a recipe
          - Add images which inspected for moderation
          - Use your phone camera to take pictures
          - Like other peoples recipe
          - Share the recipe
          - Convert measurements of an ingredient
          - Keep your screen awake`}
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
          description={`A python Test Runner that allows you to:
        - Set your own custom args when starting a test run
        - Run tests some tests parallel and some sequentially in the same test run
        - A Log file per test to only show necessary info
        - Log retention
        - Test patterns can be: glob, regex, or python import syntax
        - Be able to group your tests together for readability and for setup and teardown`}
          links={[
            {
              href: "https://github.com/jonwesneski/end2",
              text: "Code",
              targetBlank: true,
            },
          ]}
        />
        <Project
          title="Style Guide Scrapper"
          description={`This is a lightweight tool for scraping images from clothing e-commerce websites. It's handy for collecting product images in bulk, whether for research, prototyping, or personal projects.

The tool fetches images asynchronously for faster performance, while respecting each site's robots.txt rules. It also includes built-in rate limiting to avoid overwhelming servers.

You can run it with a simple configuration file for repeatable setups, or pass options directly through CLI arguments for quick one-off scrapes.`}
          links={[
            {
              href: "https://github.com/jonwesneski/style_guide_scrape",
              text: "Code",
              targetBlank: true,
            },
          ]}
        />
        <Project
          title="Vepix"
          description={`This WPF app helps you organize your images in bulk:
        - Select multi images and then give then all the same prefix or suffix
        - Move and delete images 
        - Crop images as well`}
          links={[
            {
              href: "https://github.com/jonwesneski/Vepix",
              text: "Code",
              targetBlank: true,
            },
          ]}
        />
      </div>
    </section>
  );
}
