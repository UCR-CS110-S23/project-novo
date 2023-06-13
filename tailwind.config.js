/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				outfit: ["var(--font-outfit)", "sans-serif"],
			},
			fontSize: {
				sm: "0.75rem",
				md: "0.9rem",
			},
			transitionProperty: {
				width: "width",
			},
			colors: {
				novo: {
					purple: "#7231F3",
					selectPurple: "#8763FE",
					lightpurple: "#F3EFFF",
					darkpurple: "#5F1FDE",
					lightgray: "#EDEDED",
					gray: "#F5F5F5",
					darkgray: "#777777",
					messagegray: "#858585",
					dategray: "#CBCBCB",
					profileWhite: "#D9D9D9",
				},
			},
			aspectRatio: {
				"4/3": "12/10",
				card: "12/6",
			},
		},
	},
	plugins: [],
};
