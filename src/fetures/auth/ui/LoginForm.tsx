import { useNavigate } from "react-router-dom"
import { Button } from "../../../shared/ui/Button"
import { useLoginForm } from "../model/useLoginForm"
import { AuthForm } from "./AuthForm"
import { EmailInput } from "./labels/EmailInput"
import { PasswordInput } from "./labels/PasswordInput"


export const LoginForm = () => {

    const {form, onSubmit} = useLoginForm()

    const {register, formState: {errors}} = form
     const navigate = useNavigate()


    return (

        <AuthForm onSubmit={onSubmit} className="md:w-1/3 w-11/12">
        {EmailInput({...register("email")})}
         {errors.email && <span>{errors.email.message}</span>}
         
        {PasswordInput({...register("password")})}
        {errors.password && <span>{errors.password.message}</span>}

        <div className="w-full flex flex-col">
        <Button type="submit" className="w-full ">
            Login
        </Button>

<Button className="w-full  my-4 justify-center items-center"
        onClick={() => navigate("/auth/register")}
        >not have an account
        </Button>
        </div>
        </AuthForm>
    )
}