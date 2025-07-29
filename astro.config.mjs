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
            title: 'Docs',
            head: [
                {
                    tag: 'script',
                    attrs: {
                        src: '/new-tab.js',
                    },
                },
            ],
            logo: {
                light: '/public/assets/logos/logo_white.png',
                dark: '/public/assets/logos/logo_black.png',
            },
             social: [
                    { icon: 'email', label: 'Email', href: 'https://www.nkkswitches.com/contact-us/' },
                    { icon: 'external', label: 'Homepage', href: 'https://www.nkkswitches.com/' },
                    { icon: 'github', label: 'GitHub', href: 'https://github.com/NKK-Switches' },
                    { icon: 'linkedin', label: 'Linkedin', href: 'https://www.linkedin.com/company/nkk-switches/' },
                    { icon: 'facebook', label: 'Facebook', href: 'https://facebook.com/NKKSwitches1' },
                    
                    ],
            sidebar: [
                {
                    label: '[home]Welcome',
                    link: '/',
                },
                {
                    label: '[list-box]SmartDisplay Products',
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
                    items: [
                        { label: 'OLED', link: 'docs/application-notes/oled-application-notes/' },
                        { label: 'OLED Rocker', link: 'docs/application-notes/oled-rocker-application-notes/' },
                        { label: 'LCD 64x32', link: 'docs/application-notes/lcd-64x32-application-notes/' },
                        { label: 'LCD 36x24', link: 'docs/application-notes/lcd-36x24-application-notes/' },
                    ]
                },
                {
                    label: '[rocket]Engineering Kits',
                    items: [
                        { label: 'OLED', link: 'docs/engineering-kits/oled-engineering-kits-user-manual/' },
                        { label: 'LCD 64x32', link: 'docs/engineering-kits/lcd-64x32-engineering-kits-user-manual/' },
                        { label: 'LCD 36x24', link: 'docs/engineering-kits/lcd-36x24-engineering-kits-user-manual/' },
                    ]
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
                {
                    label: '[video]Video Library',
                    link: 'https://www.nkkswitches.com/video-library/#1611773871464-dac7b5f7-2475',
                    attrs: { target: '_blank', rel: 'noopener' },
                },
                {
                    label: '[mail]Contact Us',
                    link: 'https://www.nkkswitches.com/contact-us/',
                    attrs: { target: '_blank', rel: 'noopener' },
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
                            newTab: true
                        }],
                        icons: [{
                            name: 'github',
                            href: 'https://github.com/NKK-Switches',
                            newTab: true
                        }],
                    }
                }),
            ],
        }),
    ],
});
