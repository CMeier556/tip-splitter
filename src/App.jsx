import TextInputContainer from './TextInputContainer/TextInputContainer'
import TipPercentage from './TipPercentage/TipPercentage'
import TipPrice from './TipPrice/TipPrice'
import {useState, useEffect} from 'react'


function App() {
  
  const [tipAmount, setTipAmount] = useState(0)
  const [billData, setBillData] = useState('')
  const [peopleData, setPeopleData] = useState('')
  const [pricePerPerson, setPricePerPerson] = useState(0)
  const [tipPerPerson, setTipPerPerson] = useState(0)
  

  const handleBill = (e) => {
    setBillData(e.target.value)
  }

  const handlePeople = (e) => {
    setPeopleData(e.target.value)
  }

  function resetPage() {
    window.location.reload()
  }

  useEffect(() => {
      let tipPrice = (billData * tipAmount).toFixed(2)
      let totalPrice = (billData * (1 + tipAmount)).toFixed(2)
      setPricePerPerson((totalPrice / peopleData).toFixed(2))
      setTipPerPerson((tipPrice / peopleData).toFixed(2))
    }, [tipAmount])

    return (
    <>
      <div className="billData">
        <TextInputContainer text="Bill:" handleInput={handleBill} dataInputted={billData} />
        <TextInputContainer text="Number of People:" handleInput={handlePeople} dataInputted={peopleData} />
        <TipPercentage setTipAmount={setTipAmount} />
      </div>
      <div className="billOutput">
        <br />
        <TipPrice text="Price per person: £" result={pricePerPerson > 0 ? pricePerPerson : ''}  />
        <TipPrice text="Tip amount per person: £" result={tipPerPerson > 0 ? tipPerPerson : ''} />
        <button onClick={resetPage}>Reset</button>
      </div>
    </>
  )
}


export default App
