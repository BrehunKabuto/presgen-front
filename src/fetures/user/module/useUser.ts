import { useUserStore } from "./UserStore"

export const useUser = () => {

    const me = useUserStore((s) => s.me)
    const isLoading = useUserStore((s) => s.isLoading)
    const getMe = useUserStore((s)=> s.getMe)
    const deleteMe = useUserStore((s) => s.deleteMe)

   return {me, isLoading, getMe, deleteMe}
}
