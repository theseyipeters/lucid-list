/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				teal: {
					1: "#20888F",
					2: "#1B3C3A",
				},
				gray: {
					1: "#F4F4F4",
				},
				yellow: {
					1: "#FFF7DC",
					2: "#DFAC03",
				},
				green: {
					1: "#E6FFF2",
					2: "#0FAB59",
				},
			},
		},
	},
	plugins: [],
};
