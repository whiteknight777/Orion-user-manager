const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        textColor: {
            gray: colors.coolGray,
            primary: colors.indigo[400],
            secondary: '#ffed4a',
            danger: '#e3342f',
        },
        colors: {
            indigo: colors.indigo,
            white: colors.white,
            black: colors.black,
            gray: colors.coolGray,
            blue: colors.lightBlue,
            red: colors.rose,
            pink: colors.fuchsia,
        },
        fontFamily: {
            sans: ['sans-serif'],
            serif: ['Roboto', 'serif'],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
    ],
};
