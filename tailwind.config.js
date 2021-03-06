const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'orange': colors.orange,
                'teal': colors.teal,
                'cyan': colors.cyan,
                'fuchsia': colors.fuchsia,
            }

        },
    },
    variants: {
        extend: {},
    },
    plugins: [
       // require('@tailwindcss/forms'),
    ],
}
