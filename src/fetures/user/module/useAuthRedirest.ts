import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "./useUser"

export const useAuthRedirect = (to: string = '/presentation/lib') => {
  const navigate = useNavigate()
  const { me, getMe } = useUser()

  useEffect(() => {
    getMe()
  }, [])

  useEffect(() => {
    if (me) navigate(to)
  }, [me])
}