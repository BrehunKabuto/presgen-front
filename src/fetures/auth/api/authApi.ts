import { apiClient } from "../../../shared/api/apiClient"
import {type LoginFormData, type RegisterFormData, type verifyCodeData } from "../model/authSchema"
import { authResponseShema } from "../../../shared/api/authResponsShema"

export const authApi = {

    register: async (data: RegisterFormData) => await apiClient.post("auth/register", data),

    login: async (data: LoginFormData) => {
        const res = await apiClient.post("auth/login", data)
        return authResponseShema.parse(res.data)
    },

    logout: async () => await apiClient.post("auth/logout"),

    verifyCode: async (data: verifyCodeData) => {
       
    const res = await apiClient.post("auth/verifyCode", data)
    return authResponseShema.parse(res.data)
    }
}