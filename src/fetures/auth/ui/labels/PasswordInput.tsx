export const PasswordInput = ({...props}) => {

    return (
        <div className="flex flex-col gap-2">
        Enter your password:
        <input type="password" 
        placeholder="Example: password123X"
        {...props}
        />
        </div>
    )
}