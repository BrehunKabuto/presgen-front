import {useNavigate} from "react-router-dom";

import PlusIcon from "../../../assets/images/plus.svg?react";
import BooksIcon from "../../../assets/images/books.svg?react";
import UserIcon from "../../../assets/images/user.svg?react";
import MenuIcon from "../../../assets/images/menu-burger.svg?react"
import { NavItem } from "./NavItem";
import { useState } from "react";




export const Navbar = () => {
    const navigate = useNavigate();
    const [isOpened, setIsOpened] = useState(false)
   
    return (
        <nav >
        <div className="md:hidden fixed text-text m-2.5 z-1" >

        <NavItem icon={MenuIcon} onClick={() => setIsOpened(!isOpened)} className="list-none"/>
        </div>
        
       <div className ={`md:translate-x-0 transition-transform
        duration-300 top-0 bg-bg text-text p-3 md:flex fixed
         left-0 h-screen flex-col items-center justify-start
        shadow-lg border-r-2
        ${isOpened ? "translate-x-0" : "-translate-x-full"}
         border-border-color`}>
            <div className="container mx-auto mt-12 h-full">
                <ul className = "h-full flex flex-col">
                  
                    <NavItem icon={PlusIcon} onClick={() => navigate('/presentation/generate')} />
                    <NavItem icon={BooksIcon} onClick={() => navigate('/presentation/lib') } />
                    <NavItem icon={UserIcon} onClick={() => navigate('/user/me')} className="md:mt-auto" />

                </ul>
                
            </div>
        </div>
        </nav>
    )
}