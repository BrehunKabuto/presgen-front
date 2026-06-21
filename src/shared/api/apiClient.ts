    import axios, { AxiosError } from "axios";
    import { tokenService } from "../lib/tokenService";
    import { useRotateTokenStore } from "../../fetures/rotateToken";

    export const apiClient = axios.create({

        baseURL: import.meta.env.VITE_API_URL,
        headers: {"Content-Type": "application/json"},
        withCredentials: true
    })

    apiClient.interceptors.request.use((config) => {
        const token = tokenService.get()
        if (token) {

            config.headers.Authorization =  `Bearer ${token}` 
        }
        return config
    })
    apiClient.interceptors.response.use(
        (response) => response,
        async (error: AxiosError) => {
            if(error.response?.status === 401)
            {
            const publicRoutes = ['/', '/auth/login', '/auth/register']
            if (publicRoutes.includes(window.location.pathname)) {
                return Promise.reject(error)
            }
                const originalRequest = error.config
            

                const {isRefreshing, rotate}= useRotateTokenStore.getState()
                if(!isRefreshing){
                    await rotate()
                    
                    if (originalRequest){
                        originalRequest.headers.Authorization = `Bearer ${tokenService.get()}`
                        return apiClient(originalRequest)
                        }
                }            
            }
            return Promise.reject(error)
        }

    )