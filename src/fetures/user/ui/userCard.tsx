import { useEffect, useState } from "react"
import { useUser } from "../module/useUser"
import toast from "react-hot-toast"
import { LogoutButton } from "../../auth/ui/LogoutButton"
import { Button } from "../../../shared/ui/Button"

export const UserCard = () => {

    const {me, isLoading, getMe, deleteMe} = useUser() 
    const [isOpened, setIsOpened] = useState(false)

    useEffect(() => {

        getMe()
    }, [])

    useEffect(()=>{
         if (isLoading) {
      const popUp = toast.loading('Loading data...')
      return () => toast.dismiss(popUp)
    }
    }, [isLoading])

    return(    
        
        
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col border-2
             rounded-3xl justify-center
             mx-2 w-10/12
              items-center border-border-color
               h-auto md:w-2/3 p-8">
                <p className="text-text md:text-5xl text-2xl">{`${me ? me.name :  "Loading"}`}</p>
                <div className="flex flex-col justify-center items-center w-full md:mt-28">
                <LogoutButton/>
                <Button className="mt-5 w-2/3" onClick={() => setIsOpened(true)}>Delete acount</Button>
                </div>
            </div> 
              {isOpened && (
            <div className="fixed flex justify-center items-center inset-0 bg-black/50">
                <div className="bg-bg border-border-color border-4 p-6 rounded-2xl flex flex-col h-1/4 w-2/3 justify-center items-center ">
                    <p className="text-text md:text-6xl mb-7">Delete account?</p>
                    <div className="flex flex-row">
                    <Button className="md:mx-10 mx-2" onClick={deleteMe}>Delete</Button>
                    <Button className="md:mx-10 mx-2 md:w-2/3" onClick={() => setIsOpened(false)}>Cancle</Button>
                    </div>
                </div>
            </div>
        )}
                 
        </div>

      

        
          
    )
} 