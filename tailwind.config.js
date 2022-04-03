const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'dark-primary': 'rgb(9, 12, 21)',
				'dark-secondary': 'rgb(11, 14, 28)',
				'gray-lead': 'rgb(161, 168, 181)',
				'dark-lead': 'rgb(20, 24, 39)',
				'teal-650': 'rgb(17 127 120)',
				'rose-650': 'rgb(196 26 73)',
				sky: colors.sky,
				teal: colors.teal,
				rose: colors.rose,
			},
			screens: {
				tablet: '640px',
				// => @media (min-width: 640px) { ... }

				laptop: '1024px',
				// => @media (min-width: 1024px) { ... }

				desktop: '1280px',
				// => @media (min-width: 1280px) { ... }
			},
			contrast: {
				92: '.92', // Custom Contrast for the Image on Index Landing Page
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};