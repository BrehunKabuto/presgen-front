import z from "zod/v3";


export const userResponseShema = z.object({
    id: z.number(),
    email: z.string().email(),
    name: z.string()

})

export type userData = z.infer<typeof userResponseShema>