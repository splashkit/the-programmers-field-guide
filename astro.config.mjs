import { defineConfig, squooshImageService } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

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
      wrap: true
    }
  },
  integrations: [starlight({
    title: "Field Guide",
    customCss: [
    // Relative path to your custom CSS file
    "./src/styles/custom.css"],
    social: {
      github: "https://github.com/splashkit/the-programmers-field-guide"
    },
    sidebar: [{
      label: "Home",
      link: "/"
    }, {
      label: "Part 0: First Steps",
      collapsed: true,
      items: [{
        label: "0. Introduction",
        link: "book/part-0-getting-started/00-introduction"
      }, {
        label: "1. Digital Realities",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-0-getting-started/1-digital-realities/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-0-getting-started/1-digital-realities/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          link: "book/part-0-getting-started/1-digital-realities/2-put-together"
        }, {
          label: "Activities",
          link: "book/part-0-getting-started/1-digital-realities/3-activities"
        }]
      }, {
        label: "2. Computer Use",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-0-getting-started/2-computer-use/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-0-getting-started/2-computer-use/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          collapsed: true,
          autogenerate: {
            directory: "book/part-0-getting-started/2-computer-use/2-put-together",
            collapsed: true
          }
        }, {
          label: "Activities",
          link: "book/part-0-getting-started/2-computer-use/4-activities"
        }]
      }, {
        label: "3. Building Programs",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-0-getting-started/3-building-programs/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-0-getting-started/3-building-programs/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          collapsed: true,
          autogenerate: {
            directory: "book/part-0-getting-started/3-building-programs/2-put-together",
            collapsed: true
          }
        }, {
          label: "Other Languages",
          link: "book/part-0-getting-started/3-building-programs/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-0-getting-started/3-building-programs/4-activities"
        }]
      }]
    }, {
      label: "Part 1: Instructions",
      collapsed: true,
      items: [{
        label: "0. Introducing Instructions",
        link: "book/part-1-instructions/00-part-1-programs-as-instructions"
      }, {
        label: "1. Sequence and Data",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-1-instructions/1-sequence-and-data/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-1-instructions/1-sequence-and-data/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          collapsed: true,
          autogenerate: {
            directory: "book/part-1-instructions/1-sequence-and-data/2-put-together",
            collapsed: true
          }
        }, {
          label: "Other Languages",
          link: "book/part-1-instructions/1-sequence-and-data/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-1-instructions/1-sequence-and-data/4-activities"
        }, {
          label: "Wrap Up",
          collapsed: true,
          autogenerate: {
            directory: "book/part-1-instructions/1-sequence-and-data/5-wrap-up",
            collapsed: true
          }
        }]
      }, {
        label: "2. Communicating Syntax",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-1-instructions/2-communicating-syntax/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-1-instructions/2-communicating-syntax/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          link: "book/part-1-instructions/2-communicating-syntax/2-put-together"
        }, {
          label: "Other Languages",
          link: "book/part-1-instructions/2-communicating-syntax/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-1-instructions/2-communicating-syntax/4-activities"
        }]
      }, {
        label: "3. Control Flow",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-1-instructions/3-control-flow/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-1-instructions/3-control-flow/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          collapsed: true,
          autogenerate: {
            directory: "book/part-1-instructions/3-control-flow/2-put-together",
            collapsed: true
          }
        }, {
          label: "Other Languages",
          link: "book/part-1-instructions/3-control-flow/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-1-instructions/3-control-flow/4-activities"
        }, {
          label: "Wrap Up",
          collapsed: true,
          autogenerate: {
            directory: "book/part-1-instructions/3-control-flow/5-wrapup",
            collapsed: true
          }
        }]
      }, {
        label: "4. Project",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-1-instructions/4-project/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-1-instructions/4-project/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          collapsed: true,
          autogenerate: {
            directory: "book/part-1-instructions/4-project/2-put-together",
            collapsed: true
          }
        }, {
          label: "Activities",
          link: "book/part-1-instructions/4-project/3-activities"
        }]
      }]
    }, {
      label: "Part 2: Organised Code",
      collapsed: true,
      items: [{
        label: "0. Introducing Code Organisation",
        link: "book/part-2-organised-code/00-part-2-programs-as-organised-code"
      }, {
        label: "1. Starting C/C++",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-2-organised-code/1-starting-cpp/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/1-starting-cpp/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/1-starting-cpp/2-put-together",
            collapsed: true
          }
        }, {
          label: "Other Languages",
          link: "book/part-2-organised-code/1-starting-cpp/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-2-organised-code/1-starting-cpp/4-activities"
        }, {
          label: "Wrap Up",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/1-starting-cpp/5-wrap-up",
            collapsed: true
          }
        }]
      }, {
        label: "2. Structuring Code",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-2-organised-code/2-organising-code/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/2-organising-code/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/2-organising-code/2-put-together",
            collapsed: true
          }
        }, {
          label: "Other Languages",
          link: "book/part-2-organised-code/2-organising-code/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-2-organised-code/2-organising-code/4-activities"
        }, {
          label: "Wrap Up",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/2-organising-code/5-wrap-up",
            collapsed: true
          }
        }]
      }, {
        label: "3. Structuring Data",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-2-organised-code/3-structuring-data/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/3-structuring-data/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/3-structuring-data/2-put-together",
            collapsed: true
          }
        }, {
          label: "Other Languages",
          link: "book/part-2-organised-code/3-structuring-data/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-2-organised-code/3-structuring-data/4-activities"
        }, {
          label: "Wrap Up",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/3-structuring-data/5-wrap-up",
            collapsed: true
          }
        }]
      }, {
        label: "4. Indirect Access",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-2-organised-code/4-indirect-access/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/4-indirect-access/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/4-indirect-access/2-put-together",
            collapsed: true
          }
        }, {
          label: "Other Languages",
          link: "book/part-2-organised-code/4-indirect-access/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-2-organised-code/4-indirect-access/4-activities"
        }, {
          label: "Wrap Up",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/4-indirect-access/5-wrap-up",
            collapsed: true
          }
        }]
      }, {
        label: "5. Working with Multiples",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-2-organised-code/5-working-with-multiples/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/5-working-with-multiples/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/5-working-with-multiples/2-put-together",
            collapsed: true
          }
        }, {
          label: "Other Languages",
          link: "book/part-2-organised-code/5-working-with-multiples/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-2-organised-code/5-working-with-multiples/4-activities"
        }, {
          label: "Wrap Up",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/5-working-with-multiples/5-wrap-up",
            collapsed: true
          }
        }]
      }, {
        label: "6. Memory Deep Dive",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-2-organised-code/6-deep-dive-memory/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/6-deep-dive-memory/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/6-deep-dive-memory/2-put-together",
            collapsed: true
          }
        }, {
          label: "Other Languages",
          link: "book/part-2-organised-code/6-deep-dive-memory/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-2-organised-code/6-deep-dive-memory/4-activities"
        }, {
          label: "Wrap Up",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/6-deep-dive-memory/5-wrap-up",
            collapsed: true
          }
        }]
      }, {
        label: "7. Member Functions",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-2-organised-code/7-member-functions/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/7-member-functions/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/7-member-functions/2-put-together",
            collapsed: true
          }
        }, {
          label: "Other Languages",
          link: "book/part-2-organised-code/7-member-functions/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-2-organised-code/7-member-functions/4-activities"
        }, {
          label: "Wrap Up",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/7-member-functions/5-wrap-up",
            collapsed: true
          }
        }]
      }, {
        label: "8. Saving and Loading Data",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-2-organised-code/8-file-io/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/8-file-io/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/8-file-io/2-put-together",
            collapsed: true
          }
        }, {
          label: "Other Languages",
          link: "book/part-2-organised-code/8-file-io/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-2-organised-code/8-file-io/4-activities"
        }, {
          label: "Wrap Up",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/8-file-io/5-wrap-up",
            collapsed: true
          }
        }]
      }, {
        label: "9. Low Level Programming",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-2-organised-code/9-low-level-programming/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/9-low-level-programming/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/9-low-level-programming/2-put-together",
            collapsed: true
          }
        }, {
          label: "Other Languages",
          link: "book/part-2-organised-code/9-low-level-programming/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-2-organised-code/9-low-level-programming/4-activities"
        }, {
          label: "Wrap Up",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/9-low-level-programming/5-wrap-up",
            collapsed: true
          }
        }]
      }, {
        label: "10. Project",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-2-organised-code/10-project/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/10-project/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/10-project/2-put-together",
            collapsed: true
          }
        }, {
          label: "Other Languages",
          link: "book/part-2-organised-code/10-project/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-2-organised-code/10-project/4-activities"
        }, {
          label: "Wrap Up",
          collapsed: true,
          autogenerate: {
            directory: "book/part-2-organised-code/10-project/5-wrap-up",
            collapsed: true
          }
        }]
      }]
    }, {
      label: "Part 3: Programs as Concepts",
      collapsed: true,
      items: [{
        label: "0. Introducing Concept Modelling",
        link: "book/part-3-programs-as-concepts/00-part-3-programs-as-concepts"
      }, {
        label: "1. Welcome Back to C#",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-3-programs-as-concepts/1-back-to-c-sharp/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-3-programs-as-concepts/1-back-to-c-sharp/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          link: "book/part-3-programs-as-concepts/1-back-to-c-sharp/2-put-together"
        }, {
          label: "Other Languages",
          link: "book/part-3-programs-as-concepts/1-back-to-c-sharp/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-3-programs-as-concepts/1-back-to-c-sharp/4-activities"
        }]
      }, {
        label: "2. Classes and Objects",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-3-programs-as-concepts/2-abstraction/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-3-programs-as-concepts/2-abstraction/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          link: "book/part-3-programs-as-concepts/2-abstraction/2-put-together"
        }, {
          label: "Other Languages",
          link: "book/part-3-programs-as-concepts/2-abstraction/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-3-programs-as-concepts/2-abstraction/4-activities"
        }]
      }, {
        label: "3. Unit Testing",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-3-programs-as-concepts/3-unit-testing/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-3-programs-as-concepts/3-unit-testing/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          link: "book/part-3-programs-as-concepts/3-unit-testing/2-put-together"
        }, {
          label: "Other Languages",
          link: "book/part-3-programs-as-concepts/3-unit-testing/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-3-programs-as-concepts/3-unit-testing/4-activities"
        }]
      }, {
        label: "4. Collections",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-3-programs-as-concepts/4-collections/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-3-programs-as-concepts/4-collections/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          link: "book/part-3-programs-as-concepts/4-collections/2-put-together"
        }, {
          label: "Other Languages",
          link: "book/part-3-programs-as-concepts/4-collections/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-3-programs-as-concepts/4-collections/4-activities"
        }]
      }, {
        label: "5. Collaboration and Encapsulation",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-3-programs-as-concepts/5-collaboration-encapsulation/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-3-programs-as-concepts/5-collaboration-encapsulation/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          collapsed: true,
          autogenerate: {
            directory: "book/part-3-programs-as-concepts/5-collaboration-encapsulation/2-put-together",
            collapsed: true
          }
        }, {
          label: "Other Languages",
          link: "book/part-3-programs-as-concepts/5-collaboration-encapsulation/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-3-programs-as-concepts/5-collaboration-encapsulation/4-activities"
        }]
      }, {
        label: "6. Structured Error Handling",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-3-programs-as-concepts/6-structured-error-handling/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-3-programs-as-concepts/6-structured-error-handling/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          link: "book/part-3-programs-as-concepts/6-structured-error-handling/2-put-together"
        }, {
          label: "Other Languages",
          link: "book/part-3-programs-as-concepts/6-structured-error-handling/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-3-programs-as-concepts/6-structured-error-handling/4-activities"
        }]
      }, {
        label: "7. Inheritance and Polymorphism",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-3-programs-as-concepts/7-inheritance-polymorphism/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-3-programs-as-concepts/7-inheritance-polymorphism/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          collapsed: true,
          autogenerate: {
            directory: "book/part-3-programs-as-concepts/7-inheritance-polymorphism/2-put-together",
            collapsed: true
          }
        }, {
          label: "Other Languages",
          link: "book/part-3-programs-as-concepts/7-inheritance-polymorphism/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-3-programs-as-concepts/7-inheritance-polymorphism/4-activities"
        }]
      }, {
        label: "8. Interfaces and Abstract Classes",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-3-programs-as-concepts/8-interfaces-abstract-classes/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-3-programs-as-concepts/8-interfaces-abstract-classes/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          collapsed: true,
          autogenerate: {
            directory: "book/part-3-programs-as-concepts/8-interfaces-abstract-classes/2-put-together",
            collapsed: true
          }
        }, {
          label: "Other Languages",
          link: "book/part-3-programs-as-concepts/8-interfaces-abstract-classes/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-3-programs-as-concepts/8-interfaces-abstract-classes/4-activities"
        }]
      }, {
        label: "9. Design Principles and Patterns",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-3-programs-as-concepts/9-design-principles-patterns/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-3-programs-as-concepts/9-design-principles-patterns/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          collapsed: true,
          autogenerate: {
            directory: "book/part-3-programs-as-concepts/9-design-principles-patterns/2-put-together",
            collapsed: true
          }
        }, {
          label: "Other Languages",
          link: "book/part-3-programs-as-concepts/9-design-principles-patterns/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-3-programs-as-concepts/9-design-principles-patterns/4-activities"
        }]
      }, {
        label: "10. Project",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-3-programs-as-concepts/10-project/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-3-programs-as-concepts/10-project/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          link: "book/part-3-programs-as-concepts/10-project/2-put-together"
        }, {
          label: "Other Languages",
          link: "book/part-3-programs-as-concepts/10-project/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-3-programs-as-concepts/10-project/4-activities"
        }]
      }]
    }, {
      label: "Part 4: What next?",
      collapsed: true,
      items: [{
        label: "0. The Real World",
        link: "book/part-4-what-next/00-part-4-real-world"
      }, {
        label: "1. Things We Left Out",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-4-what-next/1-things-we-left-out/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-4-what-next/1-things-we-left-out/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          link: "book/part-4-what-next/1-things-we-left-out/2-put-together"
        }, {
          label: "Other Languages",
          link: "book/part-4-what-next/1-things-we-left-out/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-4-what-next/1-things-we-left-out/4-activities"
        }]
      }, {
        label: "2. Libraries and Packages",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-4-what-next/2-libraries-packages/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-4-what-next/2-libraries-packages/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          link: "book/part-4-what-next/2-libraries-packages/2-put-together"
        }, {
          label: "Other Languages",
          link: "book/part-4-what-next/2-libraries-packages/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-4-what-next/2-libraries-packages/4-activities"
        }]
      }, {
        label: "3. Build a Game",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-4-what-next/3-build-game/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-4-what-next/3-build-game/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          link: "book/part-4-what-next/3-build-game/2-put-together"
        }, {
          label: "Other Languages",
          link: "book/part-4-what-next/3-build-game/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-4-what-next/3-build-game/4-activities"
        }]
      }, {
        label: "4. Build a Web App",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-4-what-next/4-build-web-app/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-4-what-next/4-build-web-app/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          link: "book/part-4-what-next/4-build-web-app/2-put-together"
        }, {
          label: "Other Languages",
          link: "book/part-4-what-next/4-build-web-app/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-4-what-next/4-build-web-app/4-activities"
        }]
      }, {
        label: "5. Work with AI",
        collapsed: true,
        items: [{
          label: "Overview",
          link: "book/part-4-what-next/5-integrate-ai/0-overview"
        }, {
          label: "Concepts",
          collapsed: true,
          autogenerate: {
            directory: "book/part-4-what-next/5-integrate-ai/1-concepts",
            collapsed: true
          }
        }, {
          label: "Putting it Together",
          link: "book/part-4-what-next/5-integrate-ai/2-put-together"
        }, {
          label: "Other Languages",
          link: "book/part-4-what-next/5-integrate-ai/3-other-languages"
        }, {
          label: "Activities",
          link: "book/part-4-what-next/5-integrate-ai/4-activities"
        }]
      }]
    }]
  }), react(), sitemap()],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: squooshImageService()
  },
  server: {
    port: 3001
  }
});