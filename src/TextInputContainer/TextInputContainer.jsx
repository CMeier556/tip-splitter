import Input from "../Input/Input"
import "./TextInputContainer.css"


const TextInputContainer = ({text, handleInput, dataInputted}) => {

    return (
        <div className="input-box">
            <p>{text}</p>
            <Input handleInput={handleInput} />
        </div>
    )
}

export default TextInputContainer