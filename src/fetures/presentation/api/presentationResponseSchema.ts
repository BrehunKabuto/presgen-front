import {z} from "zod"

export const presentationResponseSchema = z.object({
   url: z.string(),
   name: z.string(),
   createAt: z.string(),
   id: z.int()
})  

export const  libraryResponseShema = z.array(presentationResponseSchema)
export type Presentation = z.infer<typeof presentationResponseSchema>