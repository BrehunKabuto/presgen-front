import { apiClient } from "../../../shared/api/apiClient"
import { userResponseShema } from "./userResponseShema"


export const userApi = {

    getMe: async () => {
        const res = await apiClient.get("user")
        return userResponseShema.parse(res.data)
    },

    deleteMe: async () => {
    await apiClient.get("user")
    }
}