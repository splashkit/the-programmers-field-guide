import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	markdown: {
		shikiConfig: {
		  // Choose from Shiki's built-in themes (or add your own)
		  // https://github.com/shikijs/shiki/blob/main/docs/themes.md
		  theme: 'dracula',
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
			title: 'The Programmer\'s Field Guide',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'The Programmers Field Guide',
					autogenerate: {
						directory: 'book',
						collapsed: true,
					},
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
	server: { port: 3001 }
});
