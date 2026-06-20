import { useEffect } from "react"
import { useGenerateForm } from "../model/useGenerateForm"
import { toast } from "react-hot-toast"
import { PresentationCard } from "./PresentationCard"
import { Button } from "../../../shared/ui/Button"
import { useDeletePresentation } from "../model/useDeletePresentation"

export const GenerateForm = () => {

    const {form, onSubmit, isLoading, presentation} = useGenerateForm()
    const {cleanPresentation} = useDeletePresentation()
    const {register, formState: {errors}} = form
   
     useEffect(() =>{

        if(isLoading){
            const popUp = toast.loading("Generating presentation...")
            return () => {
                toast.dismiss(popUp)
               
            }
        }
    }), [isLoading]

    useEffect(() => {

        if(presentation){
            
            toast((t) => (
                <div className="flex items-center justify-between w-full">
                <PresentationCard presentation={presentation} DeleteButton={false} className="w-full"/>
                <div className="flex flex-col items-center justify-end ml-4">
                    <button onClick={() => toast.dismiss(t.id)}>✕</button>
                </div>
                </div>
            ),
             {duration: Infinity,
                 style: {
                    width: '500px',
                  maxWidth: '90vw',
                     padding: '0'
                 }
                }
                
            ) 
        }
        return () => {cleanPresentation()} 
    }, [presentation])

    return (
        <div className="flex flex-col min-h-screen justify-center">
        <form onSubmit={onSubmit}
        className="w-full justify-center items-center flex flex-col">
         <div
         className="flex flex-col md:flex-row justify-center md:w-1/3 w-full mb-4 " >

        <select {...register("slideCount", {valueAsNumber: true})}>
            <option value={3}>3 cards</option>
            <option value={5}>5 cards</option>
            <option value={7}>7 cards</option>
        </select>
        {errors.slideCount && <span>{errors.slideCount.message}</span>}

        <select {...register("style")}> 
            <option value="base">base</option>
             <option value="dark">dark</option>
             <option value="purple-gradient">purple-gradient</option>
        </select>
        {errors.style && <span>{errors.style.message}</span>}

        <select {...register("providerName")}>
            <option value="OpenAI">OpenAI</option>
        </select>
         {errors.providerName && <span>{errors.providerName.message}</span>}

         <select {...register("modelName")}>
            <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
            <option value="gpt-4">GPT-4</option>
         </select>
         {errors.modelName && <span>{errors.modelName.message}</span>}
         </div>

 <textarea 
             className=" p-2 border-2 border-border-color rounded-lg mb-4
                         text-text
                        focus:outline-none focus:ring-2 focus:ring-hover-button-color
                         duration-200 ease-in-out
                         resize-none   md:w-1/2 w-11/12 h-40"
         cols={30}
         placeholder="enter a presentation prompt"
        {...register("userPrompt")}
         ></textarea>
 {errors.userPrompt && <span>{errors.userPrompt.message}</span>}


        {<Button type="submit"
         disabled={isLoading}
         className="md:w-1/4 w-auto mt-4">
            {isLoading ? "Generating..." : "Generate presentation"}
            </Button>}
        
        </form>
        </div>
    )
} 