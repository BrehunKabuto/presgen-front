export const NameInput = ({...props}) => {

    return (
        <div className="flex flex-col gap-2">
        Enter your name:
        <input type="text" 
        placeholder="Some name"
        {...props}
        />
        </div>
    )
}