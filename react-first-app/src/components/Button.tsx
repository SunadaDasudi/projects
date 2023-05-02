
interface Props {
    children: string,
    color: string,
    onClick: () => void
}
function Button({ children, color, onClick }: Props) {
    return <button type="button" className={color == "" ? "btn btn-primary" : "btn btn-" + color}
        onClick={onClick}
    >{children}</button>;
}

export default Button;