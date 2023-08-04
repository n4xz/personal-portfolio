/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#54e5ca',

					secondary: '#f7998c',

					accent: '#52db08',

					neutral: '#2d2a37',

					info: '#9daff1',

					success: '#29c7ad',

					warning: '#fba651',

					error: '#e1624c'
				}
			}
		]
	},
	plugins: [require('daisyui')]
}
