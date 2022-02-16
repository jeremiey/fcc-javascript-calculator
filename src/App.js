import "./styles.css"

function App() {
  return (

  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("")

  const operators = ['/', '*', '+', '-', '.']

  const updateCalc = value => {
    if(
      (operators.includes(value) && calc === '') ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
        return
    }
    setCalc(calc + value)

    if(!operators.includes(value)) {
      setResult(eval(calc + value))
    }
  }

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{result ? result : '0'}</div>
        <div className="current-operand" id="display">{ calc || "0" }</div>
      </div>

      <button className="span-two">AC</button>
      <button>DEL</button>
      <button>&divide;</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>&times;</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>&minus;</button>
      <button>.</button>
      <button>0</button>
      <button className="span-two">=</button>

    </div>
  )
}

export default App
