import { Center, VStack } from "~/styled-system/jsx";
import { ScrollArea } from "@radix-ui/themes";
import { ReactNode } from "react";
import { css } from "~/styled-system/css";

export default async function ({
    children
}: {
    children: ReactNode
}) {
    return (
        <VStack w='full' h='full' maxH='full' sm={{ justifyContent: 'center' }}>
            <Center maxWidth='500px' w='full' maxH='full'>
                <ScrollArea
                    scrollbars="vertical"
                    type='scroll'
                    className={css({ maxH: 'full', w: 'full', overflow: 'hidden' })}
                >
                    {children}
                </ScrollArea>
            </Center>
        </VStack>
    )
}