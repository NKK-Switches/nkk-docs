// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.nkkswitches.com/',
	base: '/',
	integrations: [
		starlight({
			title: 'NKK Switches Docs',
			social: {
				email: 'mailto:engineering@nkkswitches.com',
				linkedin: 'https://www.linkedin.com/company/nkk-switches/',
				facebook: 'https://facebook.com/NKKSwitches1',
				github: 'https://github.com/NKK-Switches'
			},
			sidebar: [
				{
					label: 'Switches',
					autogenerate: { directory: 'switches' },
				},
					{
					label: 'Controllers',
					autogenerate: { directory: 'controllers' },
				},
					{
					label: 'Solutions',
					autogenerate: { directory: 'solutions' },
				},
				{
					label: 'Engineering Kits',
					autogenerate: { directory: 'engkits' },
				},
			],
		}),
	],
});
