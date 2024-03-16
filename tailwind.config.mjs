/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#00d6f7",
					secondary: "#9b9900",

					accent: "#976c00",

					neutral: "#242823",

					"base-100": "#262626",

					info: "#009ef4",

					success: "#00ac6a",

					warning: "#ae3e00",

					error: "#ff305a",
				},
			},
		],
	},
};
