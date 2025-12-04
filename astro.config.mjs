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
        {
          label: "Part 3: Programs as Concepts",
          collapsed: true,
          items: [
            {
              label: "0. Introducing Concept Modelling",
              link: "book/part-3-programs-as-concepts/00-part-3-programs-as-concepts",
            },
            {
              label: "1. Back to C# and Others",
              collapsed: true,
              items: [
                {
                  label: "Introduction",
                  link: "book/part-3-programs-as-concepts/1-back-to-c-sharp/0-overview",
                },
                {
                  label: "Guided Tour",
                  link: "book/part-3-programs-as-concepts/1-back-to-c-sharp/1-tour/0-overview",
                },
                {
                  label: "In Depth",
                  collapsed: true,
                  autogenerate: {
                    directory: "book/part-3-programs-as-concepts/1-back-to-c-sharp/2-trailside",
                    collapsed: true,
                  },
                },
                {
                  label: "Activities",
                  collapsed: true,
                  autogenerate: {
                    directory:
                      "book/part-3-programs-as-concepts/1-back-to-c-sharp/3-explore",
                    collapsed: true,
                  },
                },
              ],
            },
            {
              label: "2. Classes and Objects",
              collapsed: true,
              items: [
                {
                  label: "Introduction",
                  link: "book/part-3-programs-as-concepts/2-abstraction/0-overview",
                },
                {
                  label: "Guided Tour",
                  collapsed: true,
                  autogenerate: {
                    directory:
                      "book/part-3-programs-as-concepts/2-abstraction/1-tour",
                    collapsed: true,
                  },
                },
                {
                  label: "In Depth",
                  collapsed: true,
                  autogenerate: {
                    directory:
                      "book/part-3-programs-as-concepts/2-abstraction/2-trailside",
                    collapsed: true,
                  },
                },
                {
                  label: "Activities",
                  collapsed: true,
                  autogenerate: {
                    directory:
                      "book/part-3-programs-as-concepts/2-abstraction/3-explore",
                    collapsed: true,
                  },
                },
                {
                  label: "Campsite Reflection",
                  collapsed: true,
                  autogenerate: {
                    directory:
                      "book/part-3-programs-as-concepts/2-abstraction/4-camp",
                    collapsed: true,
                  },
                },
              ],
            },
            {
              label: "3. Collections",
              collapsed: true,
              items: [
                {
                  label: "Introduction",
                  link: "book/part-3-programs-as-concepts/3-collections/0-overview",
                },
                {
                  label: "Overview",
                  collapsed: true,
                  autogenerate: {
                    directory:
                      "book/part-3-programs-as-concepts/3-collections/0-panorama",
                    collapsed: true,
                  },
                },              
                {
                  label: "Guided Tour",
                  collapsed: true,
                  autogenerate: {
                    directory:
                      "book/part-3-programs-as-concepts/3-collections/1-tour",
                    collapsed: true,
                  },
                },
                // {
                //   label: "In Depth",
                //   collapsed: true,
                //   autogenerate: {
                //     directory:
                //       "book/part-3-programs-as-concepts/3-collections/2-trailside",
                //     collapsed: true,
                //   },
                // },
                // {
                //   label: "Activities",
                //   collapsed: true,
                //   autogenerate: {
                //     directory:
                //       "book/part-3-programs-as-concepts/3-collections/3-explore",
                //     collapsed: true,
                //   },
                // },
              ],
            },
            {
              label: "4. Collaboration",
              collapsed: true,
              items: [
                {
                  label: "Introduction",
                  link: "book/part-3-programs-as-concepts/4-collaboration/0-overview",
                },
                {
                  label: "Overview",
                  collapsed: true,
                  autogenerate: {
                    directory:
                      "book/part-3-programs-as-concepts/4-collaboration/0-panorama",
                    collapsed: true,
                  },
                },
                {
                  label: "Guided Tour",
                  collapsed: true,
                  autogenerate: {
                    directory:
                      "book/part-3-programs-as-concepts/4-collaboration/1-tour",
                    collapsed: true,
                  },
                },
                // {
                //   label: "In Depth",
                //   collapsed: true,
                //   autogenerate: {
                //     directory:
                //       "book/part-3-programs-as-concepts/4-collaboration/2-trailside",
                //     collapsed: true,
                //   },
                // },
                // {
                //   label: "Activities",
                //   collapsed: true,
                //   autogenerate: {
                //     directory:
                //       "book/part-3-programs-as-concepts/4-collaboration/3-explore",
                //     collapsed: true,
                //   },
                // },
              ],
            },
            {
              label: "5. Error Handling",
              collapsed: true,
              items: [
                {
                  label: "Introduction",
                  link: "book/part-3-programs-as-concepts/5-error-handling/0-overview",
                },
                {
                  label: "Overview",
                  collapsed: true,
                  autogenerate: {
                    directory:
                      "book/part-3-programs-as-concepts/5-error-handling/0-panorama",
                    collapsed: true,
                  },
                },
                {
                  label: "Guided Tour",
                  collapsed: true,
                  autogenerate: {
                    directory:
                      "book/part-3-programs-as-concepts/5-error-handling/1-tour",
                    collapsed: true,
                  },
                },
                // {
                //   label: "In Depth",
                //   collapsed: true,
                //   autogenerate: {
                //     directory:
                //       "book/part-3-programs-as-concepts/5-error-handling/2-trailside",
                //     collapsed: true,
                //   },
                // },
                // {
                //   label: "Activities",
                //   collapsed: true,
                //   autogenerate: {
                //     directory:
                //       "book/part-3-programs-as-concepts/5-error-handling/3-explore",
                //     collapsed: true,
                //   },
                // },
              ],
            },
            {
              label: "6. Inheritance",
              collapsed: true,
              items: [
                {
                  label: "Introduction",
                  link: "book/part-3-programs-as-concepts/6-inheritance/0-overview",
                },
                {
                  label: "Overview",
                  collapsed: true,
                  autogenerate: {
                    directory:
                      "book/part-3-programs-as-concepts/6-inheritance/0-panorama",
                    collapsed: true,
                  },
                },
                {
                  label: "Guided Tour",
                  collapsed: true,
                  autogenerate: {
                    directory:
                      "book/part-3-programs-as-concepts/6-inheritance/1-tour",
                    collapsed: true,
                  },
                },
                // {
                //   label: "In Depth",
                //   collapsed: true,
                //   autogenerate: {
                //     directory:
                //       "book/part-3-programs-as-concepts/6-inheritance/2-trailside",
                //     collapsed: true,
                //   },
                // },
                // {
                //   label: "Activities",
                //   collapsed: true,
                //   autogenerate: {
                //     directory:
                //       "book/part-3-programs-as-concepts/6-inheritance/3-explore",
                //     collapsed: true,
                //   },
                // },
              ],
            },
            {
              label: "7. Abstract Interfaces",
              collapsed: true,
              items: [
                {
                  label: "Introduction",
                  link: "book/part-3-programs-as-concepts/7-abstract-interfaces/0-overview",
                },    
                {
                  label: "Overview",
                  collapsed: true,
                  autogenerate: {
                    directory:
                      "book/part-3-programs-as-concepts/7-abstract-interfaces/0-panorama",
                    collapsed: true,
                  },
                },
                {
                  label: "Guided Tour",
                  collapsed: true,
                  autogenerate: {
                    directory:
                      "book/part-3-programs-as-concepts/7-abstract-interfaces/1-tour",
                    collapsed: true,
                  },
                },
                {
                  label: "In Depth",
                  collapsed: true,
                  autogenerate: {
                    directory:
                      "book/part-3-programs-as-concepts/7-abstract-interfaces/2-trailside",
                    collapsed: true,
                  },
                },
                {
                  label: "Activities",
                  collapsed: true,
                  autogenerate: {
                    directory:
                      "book/part-3-programs-as-concepts/7-abstract-interfaces/3-explore",
                    collapsed: true,
                  },
                },
              ],
            },
            // {
            //   label: "9. Design Principles and Patterns",
            //   collapsed: true,
            //   items: [
            //     {
            //       label: "Introduction",
            //       link: "book/part-3-programs-as-concepts/9-design-principles-patterns/0-overview",
            //     },
            //     {
            //       label: "Guided Tour",
            //       collapsed: true,
            //       autogenerate: {
            //         directory:
            //           "book/part-3-programs-as-concepts/9-design-principles-patterns/1-tour",
            //         collapsed: true,
            //       },
            //     },
            //     {
            //       label: "In Depth",
            //       collapsed: true,
            //       autogenerate: {
            //         directory:
            //           "book/part-3-programs-as-concepts/9-design-principles-patterns/2-trailside",
            //         collapsed: true,
            //       },
            //     },
            //     {
            //       label: "Activities",
            //       collapsed: true,
            //       autogenerate: {
            //         directory:
            //           "book/part-3-programs-as-concepts/9-design-principles-patterns/3-explore",
            //         collapsed: true,
            //       },
            //     },
            //   ],
            // },
            // {
            //   label: "10. Project",
            //   collapsed: true,
            //   items: [
            //     {
            //       label: "Introduction",
            //       link: "book/part-3-programs-as-concepts/10-project/0-overview",
            //     },
            //     {
            //       label: "Guided Tour",
            //       collapsed: true,
            //       autogenerate: {
            //         directory:
            //           "book/part-3-programs-as-concepts/10-project/1-tour",
            //         collapsed: true,
            //       },
            //     },
            //     {
            //       label: "In Depth",
            //       collapsed: true,
            //       autogenerate: {
            //         directory:
            //           "book/part-3-programs-as-concepts/10-project/2-trailside",
            //         collapsed: true,
            //       },
            //     },
            //     {
            //       label: "Activities",
            //       collapsed: true,
            //       autogenerate: {
            //         directory:
            //           "book/part-3-programs-as-concepts/10-project/3-explore",
            //         collapsed: true,
            //       },
            //     },
            //   ],
            // },
          ],
        },
        {
          label: "Part 4: What next?",
          collapsed: true,
          items: [
            // {
            //   label: "0. The Real World",
            //   link: "book/part-4-what-next/00-part-4-real-world",
            // },
            // {
            //   label: "1. Things We Left Out",
            //   collapsed: true,
            //   items: [
            //     {
            //       label: "Introduction",
            //       link: "book/part-4-what-next/1-things-we-left-out/0-overview",
            //     },
            //     {
            //       label: "Guided Tour",
            //       collapsed: true,
            //       autogenerate: {
            //         directory:
            //           "book/part-4-what-next/1-things-we-left-out/1-tour",
            //         collapsed: true,
            //       },
            //     },
            //     {
            //       label: "In Depth",
            //       collapsed: true,
            //       autogenerate: {
            //         directory:
            //           "book/part-4-what-next/1-things-we-left-out/2-trailside",
            //         collapsed: true,
            //       },
            //     },
            //     {
            //       label: "Activities",
            //       collapsed: true,
            //       autogenerate: {
            //         directory:
            //           "book/part-4-what-next/1-things-we-left-out/3-explore",
            //         collapsed: true,
            //       },
            //     },
            //   ],
            // },
            // {
            //   label: "2. Libraries and Packages",
            //   collapsed: true,
            //   items: [
            //     {
            //       label: "Introduction",
            //       link: "book/part-4-what-next/2-libraries-packages/0-overview",
            //     },
            //     {
            //       label: "Guided Tour",
            //       collapsed: true,
            //       autogenerate: {
            //         directory:
            //           "book/part-4-what-next/2-libraries-packages/1-tour",
            //         collapsed: true,
            //       },
            //     },
            //     {
            //       label: "In Depth",
            //       collapsed: true,
            //       autogenerate: {
            //         directory:
            //           "book/part-4-what-next/2-libraries-packages/2-trailside",
            //         collapsed: true,
            //       },
            //     },
            //     {
            //       label: "Activities",
            //       collapsed: true,
            //       autogenerate: {
            //         directory:
            //           "book/part-4-what-next/2-libraries-packages/3-explore",
            //         collapsed: true,
            //       },
            //     },
            //   ],
            // },
            // {
            //   label: "3. Build a Game",
            //   collapsed: true,
            //   items: [
            //     {
            //       label: "Introduction",
            //       link: "book/part-4-what-next/3-build-game/0-overview",
            //     },
            //     {
            //       label: "Guided Tour",
            //       collapsed: true,
            //       autogenerate: {
            //         directory:
            //           "book/part-4-what-next/3-build-game/1-tour",
            //         collapsed: true,
            //       },
            //     },
            //     {
            //       label: "In Depth",
            //       collapsed: true,
            //       autogenerate: {
            //         directory:
            //           "book/part-4-what-next/3-build-game/2-trailside",
            //         collapsed: true,
            //       },
            //     },
            //     {
            //       label: "Activities",
            //       collapsed: true,
            //       autogenerate: {
            //         directory:
            //           "book/part-4-what-next/3-build-game/3-explore",
            //         collapsed: true,
            //       },
            //     },
            //   ],
            // },
            // {
            //   label: "4. Build a Web App",
            //   collapsed: true,
            //   items: [
            //     {
            //       label: "Introduction",
            //       link: "book/part-4-what-next/4-build-web-app/0-overview",
            //     },
            //     {
            //       label: "Guided Tour",
            //       collapsed: true,
            //       autogenerate: {
            //         directory:
            //           "book/part-4-what-next/4-build-web-app/1-tour",
            //         collapsed: true,
            //       },
            //     },
            //     {
            //       label: "In Depth",
            //       collapsed: true,
            //       autogenerate: {
            //         directory:
            //           "book/part-4-what-next/4-build-web-app/2-trailside",
            //         collapsed: true,
            //       },
            //     },
            //     {
            //       label: "Activities",
            //       collapsed: true,
            //       autogenerate: {
            //         directory:
            //           "book/part-4-what-next/4-build-web-app/3-explore",
            //         collapsed: true,
            //       },
            //     },
            //   ],
            // },
            // {
            //   label: "5. Work with AI",
            //   collapsed: true,
            //   items: [
            //     {
            //       label: "Introduction",
            //       link: "book/part-4-what-next/5-integrate-ai/0-overview",
            //     },
            //     {
            //       label: "Guided Tour",
            //       collapsed: true,
            //       autogenerate: {
            //         directory:
            //           "book/part-4-what-next/5-integrate-ai/1-tour",
            //         collapsed: true,
            //       },
            //     },
            //     {
            //       label: "In Depth",
            //       collapsed: true,
            //       autogenerate: {
            //         directory:
            //           "book/part-4-what-next/5-integrate-ai/2-trailside",
            //         collapsed: true,
            //       },
            //     },
            //     {
            //       label: "Activities",
            //       collapsed: true,
            //       autogenerate: {
            //         directory:
            //           "book/part-4-what-next/5-integrate-ai/3-explore",
            //         collapsed: true,
            //       },
            //     },
            //   ],
            // },
            {
              label: "6. Introduction To Python",
              collapsed: true,
              items: [
                {
                  label: "Introduction",
                  link: "book/part-4-what-next/6-introduction-to-python/0-overview",
                },
                {
                  label: "Getting Started",
                  link: "book/part-4-what-next/6-introduction-to-python/1-getting-started",
                },
              ],
            },
          ],
        },
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
