import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import starlightLinksValidator from "starlight-links-validator";
import sitemap from "@astrojs/sitemap";
import starlightAutoSidebar from 'starlight-auto-sidebar'

// TODO: new structure
//
// 1-concepts --> 2-trailside
// 2-put-together --> 1-tour
// 4-activities --> folder ... 3-explore
// 5-wrap-up ---> 4-camp
// 3-other-languages --> move into 2-trailside as last item



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
  site: "https://programmers.guide",
  integrations: [
    starlight({
      title: "Field Guide",
      head: [
        {
          tag: "script",
          attrs: {
            async: true,
            src: "https://www.googletagmanager.com/gtag/js?id=G-M004BNHE32",
          },
        },
        {
          tag: "script",
          content: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-M004BNHE32');`,
        },
      ],
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
      social: {
        github: "https://github.com/splashkit/the-programmers-field-guide",
      },
      editLink: {
        baseUrl:
          "https://github.com/splashkit/the-programmers-field-guide/edit/main/",
      },
      plugins: [
        starlightLinksValidator({
          errorOnRelativeLinks: true,
        }),
        starlightAutoSidebar(),
      ],
      sidebar: [
        {
          label: "Part 0: First Steps",
          collapsed: true,
          autogenerate: 
          {
            directory: "book/part-0-getting-started",
            collapsed: true
          },
        },
        {
          label: "Part 1: Instructions",
          collapsed: true,
          autogenerate: 
          {
            directory: "book/part-1-instructions",
            collapsed: true
          },
        },
        {
          label: "Part 2: Organised Code",
          collapsed: true,
          autogenerate: 
          {
            directory: "book/part-2-organised-code",
            collapsed: true
          },
        },
        // {
        //   label: "Part 3: Programs as Concepts",
        //   collapsed: true,
        //   autogenerate: 
        //   {
        //     directory: "book/part-3-programs-as-concepts",
        //     collapsed: true
        //   },
        // },
        // {
        //   label: "Part 4: What next?",
        //   collapsed: true,
        //   autogenerate: 
        //   {
        //     directory: "book/part-4-what-next",
        //     collapsed: true
        //   },
        // },
        {
          label: "Appendix",
          collapsed: true,
          items: [
            {
              label: "Installation",
              collapsed: false,
              autogenerate: {
                directory:
                  "book/appendix/0-installation",
                collapsed: true,
              },
            },
            {
              label: "2. Computer Use",
              collapsed: true,
              items: [
                {
                  label: "Introduction",
                  link: "book/appendix/2-computer-use/0-overview",
                },
                {
                  label: "Overview",
                  collapsed: true,
                  autogenerate: {
                    directory:
                      "book/appendix/2-computer-use/0-panorama",
                    collapsed: true,
                  },
                },
                {
                  label: "Guided Tour",
                  collapsed: true,
                  autogenerate: {
                    directory:
                      "book/appendix/2-computer-use/1-tour",
                    collapsed: true,
                  },
                },
                {
                  label: "In Depth",
                  collapsed: true,
                  autogenerate: {
                    directory:
                      "book/appendix/2-computer-use/2-trailside",
                    collapsed: true,
                  },
                },
                {
                  label: "Activities",
                  collapsed: true,
                  autogenerate: {
                    directory:
                      "book/appendix/2-computer-use/3-explore",
                    collapsed: true,
                  },
                },
              ],
            },
          ],
        },
      ],
    }),
    react(),
    sitemap(),
  ],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  // image: {
  //   service: squooshImageService(),
  // },
  server: {
    host: true,
    port: 3001,
  },
});
