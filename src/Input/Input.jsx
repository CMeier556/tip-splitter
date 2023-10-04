const Input = ({handleInput}) => {

    return (
        <div>
            <input onInput={handleInput} type="number" name="text" id="text" min="1"></input>
        </div>
    )
}

export default Input

