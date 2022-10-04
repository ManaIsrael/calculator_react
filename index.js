function App() {

    const [expression, setExpression] = React.useState("")
    const [answer, setAnswer] = React.useState(0)

    const display = (symbol) => {
        setExpression((prev) => prev + symbol)
        if(expression(expression.length-1) == "=") {
            if(/[0-9.]/.test(symbol)) {
                setExpression(symbol)
            }
            else {
                setExpression(answer + symbol)
            }
        }
    }

    const calculate = () => {
        setAnswer(eval(expression))
        setExpression((prev) => prev + "=")
    }

    const allClear = () => {
        setExpression("")
        setAnswer(0)
    }
    const clear = () => {
        setExpression((prev) => prev.split("").slice(0, prev.length-1).join(""))
        setAnswer(0)
    }

    return (
        <div className="container">
            <div className="grid">
                <div id="display" className="dis">
                    <input type="text" value={expression} placeholder="0" disabledS></input>
                    <div className="total">{answer}</div>
                </div>
                <div className="padButton AC">
                    <button onClick={allClear} id="clear">AC</button>
                </div>
                <div className="padButton C">
                    <button onClick={clear}>C</button>
                </div>
                <div className="padButton div operators">
                    <button onClick={() => display("/")} id="divide">/</button>
                </div>
                <div className="padButton times operators">
                    <button onClick={() => display("*")} id="multiply">x</button>
                </div>
                <div className="padButton seven">
                    <button onClick={() => display("7")} id="seven">7</button>
                </div>
                <div className="padButton eight">
                    <button onClick={display} id="eight">8</button>
                </div>
                <div className="padButton nine">
                    <button onClick={() => display("9")} id="nine">9</button>
                </div>
                <div className="padButton minus operators">
                    <button onClick={() => display("-")} id="subtract">-</button>
                </div>
                <div className="padButton four">
                    <button onClick={() => display("4")} id="four">4</button>
                </div>
                <div className="padButton five">
                    <button onClick={() => display("5")} id="five">5</button>
                </div>
                <div className="padButton six">
                    <button onClick={() => display("6")} id="six">6</button>
                </div>
                <div className="padButton plus operators">
                    <button onClick={() => display("+")} id="add">+</button>
                </div>
                <div className="padButton one">
                    <button onClick={() => display("1")} id="one">1</button>
                </div>
                <div className="padButton two">
                    <button onClick={() => display("2")} id="two">2</button>
                </div>
                <div className="padButton three">
                    <button onClick={() => display("3")} id="three">3</button>
                </div>
                <div className="padButton equal">
                    <button onClick={calculate} id="equals">=</button>
                </div>
                <div className="padButton zero">
                    <button onClick={() => display("0")} id="zero">0</button>
                </div>
                <div className="padButton dot">
                    <button onClick={() => display(".")} id="decimal">.</button>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))