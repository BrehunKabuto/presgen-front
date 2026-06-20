import { useForm } from "react-hook-form"
import { useAuthStore } from "./authStore"
import { type LoginFormData, loginSchema } from "./authSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"

export const useLoginForm = () => {
    
    const login = useAuthStore((s) => s.login)
    const navigate = useNavigate()

    const form = useForm<LoginFormData>({
        resolver:zodResolver(loginSchema)
    })

    const onSubmit = form.handleSubmit(async(data) => {
        const success = await login(data)
        if(success) navigate("/presentation/lib")
    })

    return {form, onSubmit}
}