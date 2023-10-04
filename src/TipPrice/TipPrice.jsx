import "./TipPrice.css"

const TipPrice = ({text, result}) => {
    return (
        <div className="results">
            <p>{text}{result}</p>
        </div>
    )
}

export default TipPrice