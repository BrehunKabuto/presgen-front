
export const ButtonClassName = `hover:scale-105 
                            hover:shadow-lg
                            transition-all 
                            ease-in-out 
                            duration-200
          
         bg-button-color hover:bg-hover-button-color text-white font-bold py-2 px-4 rounded
         cursor-pointer`
export const Button = ({children,className,...props}:  React.ButtonHTMLAttributes<HTMLButtonElement>) => {

    return (
        <button 
        className={`${ButtonClassName}
         ${className}`}
        {...props} >
        {children}
        </button>
    )

}