export const EmailInput = ({...props}) => {

    return (
        <div className="flex flex-col gap-2">
        Enter your email:
        <input type="email" 
        placeholder="example@example.com"
        {...props}
        />
    </div>
    )
}