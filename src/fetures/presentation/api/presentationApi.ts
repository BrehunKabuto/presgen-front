import { apiClient } from "../../../shared/api/apiClient";
import { libraryResponseShema, presentationResponseSchema } from "./presentationResponseSchema";
import type { GenerateFormData } from "../model/presentationSchema";

export const presentationApi= {

    generate: async (data: GenerateFormData) => {
       
        const res = await apiClient.post("presentation", data)
        return presentationResponseSchema.parse(res.data)
    },

    getAllByUser: async () => {

        const res = await apiClient.get("presentation/byUserId")
        return libraryResponseShema.parse(res.data)
    },

    deletePresentation: async (id: string) => {
        apiClient.delete(`/presentation/${id}`)
    }
} 