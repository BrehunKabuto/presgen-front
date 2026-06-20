import { z }from "zod"

export const generateSchema = z.object({
    userPrompt: z.string("Not valid prompt").min(6),
    slideCount: z.int("Not valid slide count"),
    style: z.string("Not valid style"),
    providerName: z.string("Not valid providerName"),
    modelName: z.string("Not valid model name")
})
 
export type GenerateFormData = z.infer<typeof generateSchema>