import { useAuthStore } from "./authStore"


export const useLogout = () => {

    const logout = useAuthStore((s) => s.logout)

    const handleLogout = async () => {
       await logout()
    }

    return {handleLogout}
}