import { formatDate } from "../../../shared/lib/formatData";
import { Button, ButtonClassName } from "../../../shared/ui/Button";
import type { Presentation } from "../api/presentationResponseSchema";

import DownloadIcon from "../../../assets/images/download.svg?react"
import DeleteIcon from "../../../assets/images/trash.svg?react"
import { Link } from "react-router-dom";
import { useDeletePresentation } from "../model/useDeletePresentation";

export const PresentationCard = ({presentation, DeleteButton = true,className}:{presentation: Presentation,DeleteButton?: boolean, className?: string}) => {

    const {deletePresentation} = useDeletePresentation()

    return(
        <div className={` flex justify-between items-center
                         rounded-lg p-5 mx-4 mb-4 border-2
                         border-border-color bg-card shadow-lg ${className || ''}`}
                         >

            <div className="flex flex-col ">
            <h1 className=" font-bold">{presentation.name}</h1>
            <p>{formatDate(presentation.createAt)}</p>
            </div>
            <div className="flex">

            <Link className={`${ButtonClassName} mx-1`}
               to={presentation.url} target="_blank" rel="noopener noreferrer">
                <DownloadIcon width={20} height={20} className="fill-text"/>
            </Link>

            {DeleteButton &&
                (<Button className="mx-1" onClick={() => deletePresentation(`${presentation.id}`)}>
                <DeleteIcon width={20} height={20} className="fill-text"></DeleteIcon>
            </Button>)}
            
            </div>
        </div>
    )

}