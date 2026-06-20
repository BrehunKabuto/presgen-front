import { apiClient } from "../../../shared/api/apiClient"
import { authResponseShema } from "../../../shared/api/authResponsShema"

export const rotateTokenApi = {

    refresh: async () => { 
        const res = await apiClient.post("auth/refresh")
        return authResponseShema.parse(res.data)
    }
}