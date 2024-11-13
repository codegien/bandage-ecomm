/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			brandred: "#E74040",
			brandyellow: "#FFC938",
			brandblue: "#23A6F0",
			lightgray: "#FAFAFA",
			darkblue: "#252B42",
			emerald: "#23856D",
		},
		extend: {
			textColor: ["visited"],
			backgroundColor: ["active", "disabled", "checked"],
			borderColor: ["active", "disabled", "checked", "focused"],
			backgroundImage: {
				firstshow: "url(/src/assets/images/firstshow/asideimg.png)",
			},
		},
	},
	plugins: [],
};
