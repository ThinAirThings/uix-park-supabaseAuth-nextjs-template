import { button } from "@/ui/recipes/button";
import { input } from "@/ui/recipes/input";
import { keyframes } from "@/ui/recipes/keyframes";
import { colors, semanticColors } from "@/ui/styles/colors";
import { defineConfig } from "@pandacss/dev";
import { createPreset } from '@park-ui/panda-preset'

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: [
        "./src/components/**/*.{ts,tsx,js,jsx}",
        "./src/ui/**/*.{ts,tsx,js,jsx}",
        "./src/app/**/*.{ts,tsx,js,jsx}",
        "./src/**/*.{ts,tsx,js,jsx}"
    ],
    // Presets
    presets: ['@pandacss/preset-base', "@pandacss/preset-panda",
        createPreset({
            accentColor: 'green',
            grayColor: 'olive',
            borderRadius: 'lg',
        })
    ],
    // Files to exclude
    exclude: [],
    // Setup layers
    prefix: 'panda',
    layers: {
        reset: "panda_reset",
        base: "panda_base",
        tokens: "panda_tokens",
        recipes: "panda_recipes",
        utilities: "panda_utilities"
    },
    // Useful for theme customization
    theme: {
        extend: {
            tokens: {
                colors: colors,
            },
            semanticTokens: {
                colors: semanticColors
            },
            keyframes: keyframes,
            recipes: {
                button: button,
                input: input
            }
        },
    },
    // Light / Dark Mode
    conditions: {
        light: '[data-color-mode=light] &',
        dark: '[data-color-mode=dark] &',
    },
    staticCss: {
        themes: ['light', 'dark']
    },
    // The JSX framework to use
    jsxFramework: "react",
    // The output directory for your css system
    outdir: "styled-system",
    // alternative theme variants
    themes: {
        light: {},
        dark: {}
    }
});
