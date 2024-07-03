import { defineRecipe } from "@pandacss/dev";
import { loaderSpinner } from "./loaderSpinner";


export const button = defineRecipe({
    className: 'extended-button',
    base: {
        borderRadius: '16px',
        w: 'full',
        p: '16px',
        position: 'relative'
    },
    variants: {
        variant: {
            solid: {
                bg: 'primary',
                _disabled: {
                    bg: 'grayscale.300',
                    color: 'grayscale.600'
                },
                _hover: {
                    bg: 'secondary'
                },
                _loading: {
                    color: 'transparent',
                    _before: {
                        content: '""',
                        ...loaderSpinner({
                            color: 'white',
                            size: 3
                        }),
                    }
                }
            },
            outline: {
                borderColor: 'grayscale.200'
            }
        },
        size: {
            md: {
                fontSize: '16px',
                p: '16px',
                h: '58px'
            }
        }
    }
})