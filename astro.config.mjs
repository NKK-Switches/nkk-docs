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
            logo: {
                dark: '/public/assets/logos/NKK-Logo-Black.png',
                light: '/public/assets/logos/NKK-Logo-White.jpg',                
            },
            social: {
                github: 'https://github.com/withastro/starlight',
                email: 'mailto:engineering@nkkswitches.com',
                linkedin: 'https://www.linkedin.com/company/nkk-switches/',
                facebook: 'https://facebook.com/NKKSwitches1',                                               
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
					label: '[box]Program Creator',
					link: '/assets/creator.html',
					attrs: { target: '_blank', rel: 'noopener' }
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
                {
                    label: '[list]Engineering Documents',
                    items: [
                        {
                            label: 'SmartDisplay Cleaning',
                            link: '/assets/docs/SmartDisplay_Cleaning.pdf',
                            attrs: { target: '_blank', rel: 'noopener' }
                        }
                    ]
                },
            ],
            lastUpdated: true,
            pagination: false,
            editLink: {
                baseUrl: 'https://github.com/NKK-Switches/nkk-docs/tree/main/',
            },
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
