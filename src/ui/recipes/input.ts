import { defineRecipe } from "@pandacss/dev";


export const input = defineRecipe({
    className: 'extended-input',
    base: {
        borderRadius: '16px',
        w: 'full',
        p: '16px',
        color: 'grayscale.900',
        borderColor: 'grayscale.200',
        bg: 'grayscale.50',
        _placeholder: {
            color: 'grayscale.600'
        }
    },
    variants: {
        size: {
            md: {
                fontSize: '16px',
                p: '16px',
                h: '58px'
            }
        }
    }
})