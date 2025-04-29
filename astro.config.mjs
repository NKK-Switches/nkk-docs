// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { ion, resolve } from "starlight-ion-theme";

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.nkkswitches.com/',
	base: '/',
	integrations: [
		starlight({
			title: 'NKK Switches Docs',
			social: [
				{
				  icon: "github",
				  label: "GitHub",
				  href: "https://github.com/NKK-Switches",
				},
				{
				  icon: "linkedin",
				  label: "Linkedin",
				  href: "https://www.linkedin.com/company/nkk-switches/",
				},
				{
				  icon: "facebook",
				  label: "Facebook",
				  href: "https://facebook.com/NKKSwitches1",
				},
				{
				  icon: "email",
				  label: "Email",
				  href: "mailto:engineering@nkkswitches.com",
				}
			],
			sidebar: [
				{
					label: '[home]Welcome',
					link: 'docs/welcome/',
				},
				{
					label: '[book]Products Documentation',
					autogenerate: { directory: 'docs/Products' },
				},
				{
					label: '[rocket]Application Notes',
					autogenerate: { directory: 'docs/Application Notes' },
				},
				{
					label: '[changelog]Whitepapers',
					autogenerate: { directory: 'docs/Whitepapers' },
				},
				{
					label: '[box]How To',
					autogenerate: { directory: 'docs/How To' },
				},
			],
			lastUpdated: true,
			pagination: false,
			plugins: [
					ion({
						icons: {
						iconDir: './src/icons',
					},
					footer: {
					  text: '©️ NKK Switches 2025',
					  links: [{
						text: 'Homepage',
						href: 'https://www.nkkswitches.com/',
					  }],
					  icons: [{
						name: 'github',
						href: 'https://github.com/NKK-Switches'
					  }],
					  newTab: true
					}
				}),
			],
		}),
	],
});
