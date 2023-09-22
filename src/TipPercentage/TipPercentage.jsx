import {useState} from "react"
import Button from "../Button/Button"
import "./TipPercentage.css"


const TipPercentage = ({setTipAmount}) => {
    
    const [button1Pressed, setButton1Pressed] = useState(false)
    const [button2Pressed, setButton2Pressed] = useState(false)
    const [button3Pressed, setButton3Pressed] = useState(false)
    const [button4Pressed, setButton4Pressed] = useState(false)
    const [button5Pressed, setButton5Pressed] = useState(false)
    
    const handleClick1 = () => {
        setButton1Pressed(true)
        setButton2Pressed(false)
        setButton3Pressed(false)
        setButton4Pressed(false)
        setButton5Pressed(false)
        setTipAmount(0.05)
    }

    const handleClick2 = () => {
        setButton1Pressed(false)
        setButton2Pressed(true)
        setButton3Pressed(false)
        setButton4Pressed(false)
        setButton5Pressed(false)
        setTipAmount(0.1)
    }

    const handleClick3 = () => {
        setButton1Pressed(false)
        setButton2Pressed(false)
        setButton3Pressed(true)
        setButton4Pressed(false)
        setButton5Pressed(false)
        setTipAmount(0.15)
    }

    const handleClick4 = () => {
        setButton1Pressed(false)
        setButton2Pressed(false)
        setButton3Pressed(false)
        setButton4Pressed(true)
        setButton5Pressed(false)
        setTipAmount(0.25)
    }

    const handleClick5 = () => {
        setButton1Pressed(false)
        setButton2Pressed(false)
        setButton3Pressed(false)
        setButton4Pressed(false)
        setButton5Pressed(true)
        setTipAmount(0.5)
    }

    return (
        <container className="tip">
            <p className="tip-percent">Select Tip %</p>
            <Button  text="5%" click={handleClick1} pressed={button1Pressed}/>
            <Button  text="10%" click={handleClick2} pressed={button2Pressed}/>
            <Button  text="15%" click={handleClick3} pressed={button3Pressed}/>
            <Button  text="25%" click={handleClick4} pressed={button4Pressed}/>
            <Button  text="50%" click={handleClick5} pressed={button5Pressed}/> 
        </container>
    )
}

export default TipPercentage