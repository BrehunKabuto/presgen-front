import { create } from "zustand"
import type { userData } from "../api/userResponseShema"
import { userApi } from "../api/userApi"


interface userStore {

    getMe: () => Promise<void>,
    me: userData | null,
    isLoading: boolean,
    deleteMe: () => Promise<void>
}

export const useUserStore = create<userStore>((set) => ({

    isLoading: false,
    me: null,
    getMe: async () => {

        try{
            set({isLoading: true})
            const user = await userApi.getMe()
            set({
                me: user
            })
        }
        catch(e){
            console.error(e)

        }finally{
            set({isLoading: false})
        }
    },

    deleteMe: async () => {

        try {
            set({isLoading: true})
            await userApi.deleteMe()

        }
        catch(e){
            console.error(e)

        }finally{
            set({isLoading: false})
        }
    }
}))