import { useForm } from "react-hook-form"
import { usePresentationStore } from "./presentationStore"

import { generateSchema, type GenerateFormData } from "./presentationSchema"
import { zodResolver } from "@hookform/resolvers/zod"

export const useGenerateForm = () => {

    const generate = usePresentationStore((s) => s.generate)
    const isLoading = usePresentationStore((s) => s.isLoading)
    const presentation = usePresentationStore((s) => s.presentation)

    const form = useForm<GenerateFormData>({
        resolver: zodResolver(generateSchema)
    })

    const onSubmit = form.handleSubmit(async (data) => {
        await generate(data)
    })

    return {form, onSubmit, isLoading, presentation}
}