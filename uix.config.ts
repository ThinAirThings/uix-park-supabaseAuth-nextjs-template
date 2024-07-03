
import { defineConfig, defineNodeType } from "@thinairthings/uix";
import { z } from "zod";

export default defineConfig({
    type: 'Base',
    nodeTypeSet: [
        defineNodeType('User', z.object({
            email: z.string().email(),
        }))
    ],
    envPath: '.env.local',
    outdir: 'uix/generated',
})
