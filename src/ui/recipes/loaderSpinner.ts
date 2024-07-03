import { VstackProps } from "~/styled-system/jsx";

export const loaderSpinner = ({
    size = 3,
    color
}: {
    size: number
    color: VstackProps['color']
}) => ({
    fontSize: `${size}px`,
    width: '1em',
    height: '1em',
    borderRadius: '50%',
    position: 'absolute',
    textIndent: '-9999em',
    animation: 'loaderSpinner 1s infinite linear',
    transform: 'translateZ(0)',
    color
})