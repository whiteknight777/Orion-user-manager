const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
    purge: ['src/**/*.js',
        'src/**/*.jsx',
        'src/**/*.ts',
        'src/**/*.tsx',
        'public/**/*.html'],
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
            white: colors.white,
            gray: colors.coolGray,
            indigo: colors.indigo,
            primary: colors.indigo[600],
            secondary: '#ffed4a',
            danger: '#e3342f',
        },
        colors: {
            primary: colors.indigo[500],
            secondary: '#ffed4a',
            danger: '#e3342f',
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
