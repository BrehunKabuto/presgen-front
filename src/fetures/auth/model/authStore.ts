import { create } from "zustand"
import type { LoginFormData, RegisterFormData, verifyCodeData } from "./authSchema"
import { authApi } from "../api/authApi"
import { tokenService } from "../../../shared/lib/tokenService"


interface AuthStore{

    user: User | null
    register: (creds: RegisterFormData) => Promise<boolean>
    login: (creds: LoginFormData) => Promise<boolean>
    logout: () => Promise<void>
    sendCode: (creds: verifyCodeData) => Promise<boolean>
    isLoaded: boolean
}

interface User {
    accessToken: string
}

export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    isLoaded: false,

    register: async (creds) => {

        try{
            set({isLoaded: true})
            await authApi.register(creds)
            return true
        }
        catch(e){
            console.error(e)
            return false
        }
        finally{
            set({isLoaded: false})
        }
    },

    login: async (creds) => {

        try {
            set({isLoaded: true})

            const user = await authApi.login(creds)
            tokenService.set(user.accessToken)
            set({isLoaded: false, user: user})
            return true
        }
        catch(e){

            console.error(e)
            return false
        }
        finally{
            set({isLoaded: false})
        }
    },

    logout: async () => {

        try{
            set({isLoaded:true})
            await authApi.logout()
        }
        catch(e){   

            console.error(e)
        }finally{
            
            tokenService.remove()
            set({isLoaded:false})
            window.location.href = "/auth/login"

        }
    },

    sendCode: async (creds: verifyCodeData) => {

        try{
            set({isLoaded: true})
            const user = await authApi.verifyCode(creds)
             tokenService.set(user.accessToken)
            set({
                user: user,
                isLoaded:false
            })
            return true
        }
         catch(e){   

            console.error(e)
            return false
        }finally{
            
            set({isLoaded:false})
        }
    }

}))

