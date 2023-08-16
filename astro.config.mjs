import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "dracula",
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
  integrations: [
    starlight({
      title: "Field Guide",
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        { label: "Home", link: "/" },
        {
          label: "Start here",
          items: [
            {
              label: "Introduction",
              link: "book/part-0-getting-started/00-introduction",
            },
            {
              label: "Digital Realities",
              items: [
                {
                  label: "Overview",
                  link: "book/part-0-getting-started/1-digital-realities/0-overview",
                },
                {
                  label: "Concepts",
                  autogenerate: {
                    directory:
                      "book/part-0-getting-started/1-digital-realities/1-concepts",
                    collapsed: true,
                  },
                },
                {
                  label: "Putting it Together",
                  link: "book/part-0-getting-started/1-digital-realities/2-putting-together",
                },
                {
                  label: "Activities",
                  link: "book/part-0-getting-started/1-digital-realities/3-Activities",
                },
              ],
            },
            {
              label: "Computer Use",
              items: [
                {
                  label: "Computer Use Overview",
                  link: "book/part-0-getting-started/2-computer-use/0-overview",
                },
                {
                  label: "Concepts",
                  autogenerate: {
                    directory:
                      "book/part-0-getting-started/2-computer-use/1-concepts",
                    collapsed: true,
                  },
                },
                {
                  label: "Putting it Together",
                  link: "book/part-0-getting-started/2-computer-use/2-put-together",
                },
                {
                  label: "Activities",
                  link: "book/part-0-getting-started/2-computer-use/4-activities",
                },
              ],
            },
            {
              label: "Building Programs",
              items: [
                {
                  label: "Overview",
                  link: "book/part-0-getting-started/3-building-programs/0-overview",
                },
                {
                  label: "Concepts",
                  autogenerate: {
                    directory:
                      "book/part-0-getting-started/3-building-programs/1-concepts",
                    collapsed: true,
                  },
                },
                {
                  label: "Putting it Together",
                  link: "book/part-0-getting-started/3-building-programs/2-put-together",
                },
                {
                  label: "Other Languages",
                  link: "book/part-0-getting-started/3-building-programs/3-other-languages",
                },
                {
                  label: "Activities",
                  link: "book/part-0-getting-started/3-building-programs/4-activities",
                },

              ],
            },
          ],
        },
        {
          label: "Part 1: Instructions",
          autogenerate: {
            directory: "book/part-1-instructions",
            collapsed: true,
          },
        },
        {
          label: "Part 2: Organised Code",
          autogenerate: {
            directory: "book/part-2-organised-code",
            collapsed: true,
          },
        },
        {
          label: "Part 3: Programs as Concepts",
          autogenerate: {
            directory: "book/part-3-programs-as-concepts",
            collapsed: true,
          },
        },
        {
          label: "Part 4: What next?",
          autogenerate: {
            directory: "book/part-4-what-next",
            collapsed: true,
          },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
  server: { port: 3001 },
});
