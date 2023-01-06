const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'poke-yellow': {
                    DEFAULT: '#F7C505',
                    '50': '#FEEFB6',
                    '100': '#FDEAA2',
                    '200': '#FCE17A',
                    '300': '#FBD952',
                    '400': '#FBD02A',
                    '500': '#F7C505',
                    '600': '#C09904',
                    '700': '#896D03',
                    '800': '#524102',
                    '900': '#1B1601'
                  },
                  'poke-blue': {
                    DEFAULT: '#394AC4',
                    '50': '#C6CBEE',
                    '100': '#B6BDEA',
                    '200': '#97A0E1',
                    '300': '#7783D7',
                    '400': '#5866CE',
                    '500': '#394AC4',
                    '600': '#2C3A99',
                    '700': '#20296D',
                    '800': '#131942',
                    '900': '#060816'
                  },
                  'poke-red': {
                    DEFAULT: '#F70000',
                    '50': '#FFB0B0',
                    '100': '#FF9B9B',
                    '200': '#FF7272',
                    '300': '#FF4A4A',
                    '400': '#FF2121',
                    '500': '#F70000',
                    '600': '#BF0000',
                    '700': '#870000',
                    '800': '#4F0000',
                    '900': '#170000'
                  },
            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
