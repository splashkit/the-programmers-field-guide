import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import react from '@astrojs/react';

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
        {
          label: "Home",
          link: "/",
        },
        {
          label: "Part 0: First Steps",
          collapsed: true,
          items: [
            {
              label: "Introduction",
              link: "book/part-0-getting-started/00-introduction",
            },
            {
              label: "Digital Realities",
              collapsed: true,
              items: [
                {
                  label: "Overview",
                  link: "book/part-0-getting-started/1-digital-realities/0-overview",
                },
                {
                  label: "Concepts",
                  collapsed: true,
                  autogenerate: {
                    directory:
                      "book/part-0-getting-started/1-digital-realities/1-concepts",
                    collapsed: true,
                  },
                },
                {
                  label: "Putting it Together",
                  link: "book/part-0-getting-started/1-digital-realities/2-put-together",
                },
                {
                  label: "Activities",
                  link: "book/part-0-getting-started/1-digital-realities/3-activities",
                },
              ],
            },
            {
              label: "Computer Use",
              collapsed: true,
              items: [
                {
                  label: "Computer Use Overview",
                  link: "book/part-0-getting-started/2-computer-use/0-overview",
                },
                {
                  label: "Concepts",
                  collapsed: true,
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
              collapsed: true,
              items: [
                {
                  label: "Overview",
                  link: "book/part-0-getting-started/3-building-programs/0-overview",
                },
                {
                  label: "Concepts",
                  collapsed: true,
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
          collapsed: true,
          items: [
            {
              label: "Introducing Instructions",
              link: "book/part-1-instructions/00-part-1-programs-as-instructions",
            },
            {
              label: "Sequence and Data",
              collapsed: true,
              autogenerate: {
                directory: "book/part-1-instructions/1-sequence-and-data",
                collapsed: true,
              },
            },
            {
              label: "Communicating Syntax",
              collapsed: true,
              autogenerate: {
                directory: "book/part-1-instructions/2-communicating-syntax",
                collapsed: true,
              },
            },
            {
              label: "Control Flow",
              collapsed: true,
              autogenerate: {
                directory: "book/part-1-instructions/3-control-flow",
                collapsed: true,
              },
            },
            {
              label: "Structured Programming",
              collapsed: true,
              autogenerate: {
                directory: "book/part-1-instructions/4-structured-programming",
                collapsed: true,
              },
            },
          ],
        },
        {
          label: "Part 2: Organised Code",
          collapsed: true,
          items: [
            {
              label: "Introducing Code Organisation",
              link: "book/part-2-organised-code/00-part-2-programs-as-organised-code",
            },
            {
              label: "Starting C++",
              collapsed: true,
              autogenerate: {
                directory: "book/part-2-organised-code/1-starting-cpp",
                collapsed: true,
              },
            },
            {
              label: "Organising Code",
              collapsed: true,
              autogenerate: {
                directory: "book/part-2-organised-code/2-organised-code",
                collapsed: true,
              },
            },
            {
              label: "Structuring Data",
              collapsed: true,
              autogenerate: {
                directory: "book/part-2-organised-code/3-structuring-data",
                collapsed: true,
              },
            },
            {
              label: "Indirectly Accessing Data",
              collapsed: true,
              autogenerate: {
                directory: "book/part-2-organised-code/4-indirect-access",
                collapsed: true,
              },
            },
            {
              label: "Working with Multiples",
              collapsed: true,
              autogenerate: {
                directory: "book/part-2-organised-code/5-working-with-multiples",
                collapsed: true,
              },
            },
            {
              label: "Deep Dive on Memory",
              collapsed: true,
              autogenerate: {
                directory: "book/part-2-organised-code/6-deep-dive-memory",
                collapsed: true,
              },
            },
            {
              label: "Low Level Programming",
              collapsed: true,
              autogenerate: {
                directory: "book/part-2-organised-code/7-low-level-programming",
                collapsed: true,
              },
            },
            {
              label: "Welcome Back to C#",
              collapsed: true,
              autogenerate: {
                directory: "book/part-2-organised-code/8-back-to-c-sharp",
                collapsed: true,
              },
            },
            {
              label: "Classes and Objects",
              collapsed: true,
              items: [
                {
                  label: "Overview",
                  link: "book/part-2-organised-code/9-classes-and-objects/0-overview",
                },
                {
                  label: "Concepts",
                  collapsed: true,
                  autogenerate: {
                    directory:
                      "book/part-2-organised-code/9-classes-and-objects/1-concepts",
                    collapsed: true,
                  },
                },
                {
                  label: "Putting it Together",
                  link: "book/part-2-organised-code/9-classes-and-objects/2-put-together",
                },
                {
                  label: "Looking Inside",
                  link: "book/part-2-organised-code/9-classes-and-objects/3-looking-inside",
                },
                {
                  label: "Other Languages",
                  link: "book/part-2-organised-code/9-classes-and-objects/4-other-languages",
                },
                {
                  label: "Activities",
                  link: "book/part-2-organised-code/9-classes-and-objects/5-activities",
                },
              ],
            },
            {
              label: "Collections",
              collapsed: true,
              autogenerate: {
                directory: "book/part-2-organised-code/10-collections",
                collapsed: true,
              },
            },
            {
              label: "Structured Error Handling",
              collapsed: true,
              autogenerate: {
                directory: "book/part-2-organised-code/11-structured-error-handling",
                collapsed: true,
              },
            },
            {
              label: "Function Abstractions",
              collapsed: true,
              autogenerate: {
                directory: "book/part-2-organised-code/12-function-abstractions",
                collapsed: true,
              },
            },
          ],
        },
        {
          label: "Part 3: Programs as Concepts",
          collapsed: true,
          items: [
            {
              label: "Introducing Conceptual Thinking",
              link: "book/part-3-programs-as-concepts/00-part-3-programs-as-concepts",
            },
            {
              label: "Abstraction",
              collapsed: true,
              autogenerate: {
                directory: "book/part-3-programs-as-concepts/1-abstraction",
                collapsed: true,
              },
            },
            {
              label: "Unit Testing",
              collapsed: true,
              autogenerate: {
                directory: "book/part-3-programs-as-concepts/2-unit-testing",
                collapsed: true,
              },
            },
            {
              label: "Collaboration and Encapsulation",
              collapsed: true,
              autogenerate: {
                directory: "book/part-3-programs-as-concepts/3-collaboration-encapsulation",
                collapsed: true,
              },
            },
            {
              label: "Inheritance and Polymorphism",
              collapsed: true,
              autogenerate: {
                directory: "book/part-3-programs-as-concepts/4-inheritance-polymorphism",
                collapsed: true,
              },
            },
            {
              label: "Interfaces and Abstract Classes",
              collapsed: true,
              autogenerate: {
                directory: "book/part-3-programs-as-concepts/5-interfaces-abstract-classes",
                collapsed: true,
              },
            },
            {
              label: "Design Principles and Patterns",
              collapsed: true,
              autogenerate: {
                directory: "book/part-3-programs-as-concepts/6-design-principles-patterns",
                collapsed: true,
              },
            },
          ],
        },
        {
          label: "Part 4: What next?",
          collapsed: true,
          items: [
            {
              label: "The Real World",
              link: "book/part-4-what-next/00-part-4-real-world",
            },
            {
              label: "Things We Left Out",
              collapsed: true,
              autogenerate: {
                directory: "book/part-4-what-next/1-things-we-left-out",
                collapsed: true,
              },
            },
            {
              label: "Libraries and Packages",
              collapsed: true,
              autogenerate: {
                directory: "book/part-4-what-next/2-libraries-packages",
                collapsed: true,
              },
            },
            {
              label: "Build a Game",
              collapsed: true,
              autogenerate: {
                directory: "book/part-4-what-next/3-build-game",
                collapsed: true,
              },
            },
            {
              label: "Build a Web App",
              collapsed: true,
              autogenerate: {
                directory: "book/part-4-what-next/4-build-web-app",
                collapsed: true,
              },
            },
            {
              label: "Work with AI",
              collapsed: true,
              autogenerate: {
                directory: "book/part-4-what-next/5-integrate-ai",
                collapsed: true,
              },
            },
          ],
        },
      ],
    }),
    react(),
  ],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  server: {
    port: 3001,
  },
});
