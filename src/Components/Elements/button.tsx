
interface Props {
    nameClass: string
    text: string
    width?: string
    direct?: string
    types?: "button" | "submit" | "reset" | undefined
    onClickButton?: (data: string | undefined) => void
}
function Button({nameClass, text, width, onClickButton, types ='button', direct}: Props) {
    return (
        <>
            <button onClick={() => onClickButton && onClickButton(direct)} className={`btn ${nameClass} w-${width} btn-sm me-2`} type={types}>{text}</button>
        </>
    )
}

export default Button;