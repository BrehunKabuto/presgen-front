import { useNavigate } from "react-router-dom"
import { Button } from "../../../shared/ui/Button"
import { useRegisterForm } from "../model/useRegisterForm"
import { AuthForm } from "./AuthForm"
import { EmailInput } from "./labels/EmailInput"
import { NameInput } from "./labels/NameInput"
import { PasswordInput } from "./labels/PasswordInput"
import { OtpInput } from "../../../shared/ui/OtpIndex"
import { useState } from "react"

export const RegisterForm = () => {

    const {form, onSubmit, step, verifyCode, isLoading} = useRegisterForm()
    const {register, formState: {errors}} = form
    const navigate = useNavigate()
    const [code, setCode] = useState<string>("")

    if(step ==="email"){
        return(
    
            <AuthForm onSubmit={onSubmit} className="md:w-1/3 w-11/12 ">
            
            {EmailInput({...register("email")})}
             {errors.email && <span>{errors.email.message}</span>}
             
            {PasswordInput({...register("password")})}
            {errors.password && <span>{errors.password.message}</span>}
    
            {NameInput({...register("name")})}
            {errors.name && <span>{errors.name.message}</span>}
    
            <div className="w-full flex flex-col justify-center items-center  ">
            
            <Button type="submit" className="w-full ">
                {isLoading ? "Loading..." : "Register"}
            </Button>
            
            <Button type="button" className="w-full  my-4"
            onClick={() => navigate("/auth/login")}
            >Already have an account
            </Button>
            </div>
            </AuthForm>
        )
    }
    if (step ==="sendCode") {
        return(
        <div className="overscroll-none flex flex-col items-center justify-center md:h-screen h-dvh">
                <div className="flex items-center justify-center">
                <OtpInput onChange={(val) => {setCode(val)}}></OtpInput>
                </div>
                <Button className="mt-2 w-10/12 md:w-auto" onClick={() => verifyCode(code)}>Submit</Button>
        </div>
        )
    }
}
