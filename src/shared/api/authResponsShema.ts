import z from "zod";

export const authResponseShema = z.object({

    accessToken: z.string()
})