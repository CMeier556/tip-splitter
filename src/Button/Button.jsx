import "./Button.css"

const Button = ({text, click, pressed}) => {
    
    return (
        <button className={pressed ? 'button-pressed' : ''} onClick={click}>
            {text}
        </button>
    )
}

export default Button