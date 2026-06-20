import { create } from "zustand"
import { rotateTokenApi } from "../api/rotateTokenApi"
import { tokenService } from "../../../shared/lib/tokenService"

interface RotateTokenStore {
    isRefreshing: boolean

    rotate: () => Promise<void>
}

export const useRotateTokenStore = create<RotateTokenStore>((set) => ({

    isRefreshing: false,

    rotate: async() => {

        try{
            set({isRefreshing: true})
            const res = await rotateTokenApi.refresh()
            tokenService.set(res.accessToken)
            set({isRefreshing: false})
        }
        catch(e){
            tokenService.remove()
            console.error(e)
            window.location.href = "/auth/login"
            
        }
        finally{
            set({isRefreshing: false})
        }
    }
}))