import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			sans: ["Montserrat", "sans-serif"],
			serif: ["Cormorant Garamond", "serif"],
		},
		container: {
			center: true,
			padding: "2rem",
		},
		extend: {
			backgroundImage: {
				companyBanner: "url('./src/assets/banner-company.webp')",
			},
			colors: {
				"primary-100": "#ebc9bd",
				"primary-400": "#c8a497",
				"primary-600": "#ab8476",
				footer: "#1b1b1b",
			},
		},
	},
	plugins: [],
};
export default config;
