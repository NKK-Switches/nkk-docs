// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { ion } from "starlight-ion-theme";

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
				},
			  ],
			sidebar: [
				{
					label: 'Switches',
					autogenerate: { directory: 'docs/switches' },
				},
					{
					label: 'Controllers',
					autogenerate: { directory: 'docs/controllers' },
				},
					{
					label: 'Solutions',
					autogenerate: { directory: 'docs/solutions' },
				},
				{
					label: 'Engineering Kits',
					autogenerate: { directory: 'docs/engkits' },
				},
			],
			plugins: [
				ion()
			],
		}),
	],
});
