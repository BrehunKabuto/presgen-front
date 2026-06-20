import {z} from "zod"

export const loginSchema = z.object({
    email: z.email("not valid email"),
    password: z.string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
})

export const registerSchema = z.object({

    email: z.email("not valid email"),
    password: z.string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter"),
    name: z.string()
    
})

export const verifyCodeShema = z.object({
    email: z.email("not valid email"),
   code: z.string("not valid code").min(6).max(6)
})

export type RegisterFormData = z.infer<typeof registerSchema>
export type LoginFormData = z.infer<typeof loginSchema>
export type verifyCodeData = z.infer<typeof verifyCodeShema>