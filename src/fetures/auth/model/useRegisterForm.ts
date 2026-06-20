import { useForm } from "react-hook-form"
import { useAuthStore } from "./authStore"
import { registerSchema, type RegisterFormData } from "./authSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export const useRegisterForm = () => {

    const register = useAuthStore((s) => s.register)
    const navigate = useNavigate()
    const isLoading = useAuthStore((s) => s.isLoaded)
    const useVerifyCode = useAuthStore((s) => s.sendCode)
    const [step, setStep] = useState<"email"|"sendCode">("email")
    const [email, setEmail] = useState<string>("")

    const form = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema)
    })
    const onSubmit = form.handleSubmit(async(data:RegisterFormData) =>{
        const success = await register(data)
        if(success) {
            setEmail(data.email)
            setStep("sendCode")
        }
    })

    const verifyCode = (async(code: string) => {
        const data = {
            code,
            email
        }
        const success = await useVerifyCode(data)
        if(success) {
            navigate("/presentation/lib")
            setEmail("")    
        }
    })



    return {form, onSubmit, step, verifyCode, isLoading}
}