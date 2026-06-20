    export const AuthForm = (
        {children,
        onSubmit,
        className
        }: {
            children: React.ReactNode,
            onSubmit: (e:React.FormEvent<HTMLFormElement>) => void,
            className?: string
        }
    ) => {

        return (
            <div className="overscroll-none flex items-center justify-center md:h-screen h-dvh">
            <form onSubmit={onSubmit}
            className={`flex flex-col gap-4 md:w-1/3
         p-6 border-2
            border-border-color rounded-lg
             bg-background-color
            align-items-center justify-between
            h-auto shadow-lg ${className || ''}`}>
                {children}
            </form>
        </div>
        )
    }