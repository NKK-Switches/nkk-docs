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
			social: {
				github: 'https://github.com/withastro/starlight',
				email: 'mailto:engineering@nkkswitches.com',
				linkedin: 'https://www.linkedin.com/company/nkk-switches/',
				facebook: 'https://facebook.com/NKKSwitches1',
				github: 'https://github.com/NKK-Switches'
			},
			sidebar: [
				{
					label: '[home]Welcome',
					link: '/',
				},
                {
                    label: '[list-box]Datasheets',
                    link: 'docs/datasheets',                    
                },
                {
                    label: '[pen]Whitepapers',
                    link: 'docs/whitepapers', 
                },
                {
					label: '[book]Application Notes',
					autogenerate: { directory: 'docs/Application Notes' },
				},
                {
                    label: '[rocket]Engineering Kits',
                    autogenerate: { directory: 'docs/Engineering Kits' },
                },
                {
                    label: '[bolt]Controllers',
                    autogenerate: { directory: 'docs/Controllers' },
                },
                {
                    label: '[lightbulb]Solutions',
                    autogenerate: { directory: 'docs/Solutions' },
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
