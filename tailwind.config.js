/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(--tw-gradient-stops)',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, (--tw-gradient-stops))',
			},
			colors: {
				...colors,
				primary: colors.purple,
				secondary: colors.pink,
				thirdly: colors.blue,
				customText: 'rgb(156, 152, 169)',
			},
		},
	},
	plugins: [],
};
