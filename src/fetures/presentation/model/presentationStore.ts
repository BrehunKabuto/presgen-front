import { create } from "zustand";
import type { GenerateFormData } from "./presentationSchema"; 
import { presentationApi } from "../api/presentationApi";
import type { Presentation } from "../api/presentationResponseSchema";




interface PresentationStore {

    presentation: Presentation | null,
    presentations: Presentation[],

    generate: (creds: GenerateFormData) => Promise<void>,
    getAllByUser: () => Promise<void>,
    deletePresentation: (id: string) => Promise<void>,
    cleanPresentation: () => Promise<void>,
    isLoading: boolean
   
}

export const usePresentationStore = create<PresentationStore>((set)=> ({

    presentation: null,
    isLoading: false,
    presentations: [],
   
        generate: async (creds) =>  {

            try{
                set({isLoading: true})
                const presentation = await presentationApi.generate(creds)
                
                set({
                    isLoading: false,
                    presentation: presentation
                })
            }
            catch(e: any)
            {
            if (e?.response?.status !== 401) {
            console.error(e)
        }
            }
            finally{
                set({isLoading: false})
            }
        },

    getAllByUser: async () => {
        try{

            set({isLoading: true})
            const presentations = await presentationApi.getAllByUser()
            set(
                {
                    isLoading: false,
                    presentations: presentations
                }
            )
        }catch(e: any){

            if (e?.response?.status !== 401) {
        console.error(e)
    }
        }
        finally{
            set({isLoading: false})
        }
    },

    deletePresentation: async(id: string) => {

        try{
            set({isLoading: true})
            await presentationApi.deletePresentation(id)
            set({isLoading: false})
            set((state) => ({
                presentations: state.presentations.filter((p) => p.id !== +id)
            }))
        }
        catch(e: any){
            if (e?.response?.status !== 401) {
        console.error(e)
    }
        }
        finally{
            set({isLoading: false})
        }
        
    },
    cleanPresentation: async () => set({presentation: null})
}))