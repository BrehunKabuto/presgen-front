import { Button } from "../../../shared/ui/Button"
import { useLogout } from "../model/useLogout"

export const LogoutButton = () => {

    const {handleLogout} = useLogout()

    return (
        <Button onClick={handleLogout} className="md:w-2/3 w-10/12 mt-6">Logout</Button>
    )
} 