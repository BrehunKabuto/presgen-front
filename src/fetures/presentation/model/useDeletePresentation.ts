import { usePresentationStore } from "./presentationStore"

export const useDeletePresentation = () => {

    const deletePresentation = usePresentationStore((s) => s.deletePresentation)
    const cleanPresentation = usePresentationStore((s) => s.cleanPresentation)
    return{ deletePresentation, cleanPresentation}

}