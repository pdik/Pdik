import preset from './vendor/filament/support/tailwind.config.preset'
import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
export default {
    presets: [preset],
    content: [
        './app/Filament/**/*.php',
        './resources/views/**/*.blade.php',
        './vendor/filament/**/*.blade.php',
        './resources/views/filament/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors:{
                "primary": "#F59E0B",
                "darkBlue": "#1E293B",
                "lightGrey":"#94A3B8",
                "dark": "#313131"
            }
        },
    },

    plugins: [forms],
}
