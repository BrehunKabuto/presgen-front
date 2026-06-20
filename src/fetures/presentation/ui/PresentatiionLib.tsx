import { useEffect } from "react"
import type { Presentation } from "../api/presentationResponseSchema"
import { usePresentationStore } from "../model/presentationStore"
import { PresentationCard } from "./PresentationCard"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"
import { ButtonClassName } from "../../../shared/ui/Button"


export const PresentationLib = () => {

    const presentations = usePresentationStore( (s) => s.presentations)
    const getAllByUser = usePresentationStore((s) => s.getAllByUser)
    const isLoading = usePresentationStore((s) => s.isLoading)
   
    useEffect(() => {
        getAllByUser()
       
    }, [])
    useEffect(() =>{

        if(isLoading && presentations.length === 0){
            const popUp = toast.loading("Loading presentations...")
            return () => toast.dismiss(popUp)
        }
    }), [isLoading]
    
   if(presentations.length > 0 ){
       return (
        <div className="w-full h-auto flex flex-col items-center">
           <div className="flex flex-col md:w-2/3 w-full justify-center">
               <div className="mt-13">
               {
                   presentations.toSorted((a,b) => a.id - b.id).map((p: Presentation) => (<PresentationCard key={p.id} presentation={p}/> ))
               }
               </div>
           </div>
        </div>
       )
   }
   else if(!isLoading){
     return(
        <div className="flex flex-col justify-center  items-center h-screen  text-text">
           <p className="text-4xl"> No presentations yet</p>
            <Link to="/presentation/generate" className={`${ButtonClassName} mt-3`}>Generate first presentation</Link>
        </div>
        
     )
   }
} 