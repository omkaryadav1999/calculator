// create the wtach with the weekday also.
import React, { useState } from "react";

function App() {
    const [input, setInput] = useState("");
    const getdata = (e) => {
        setInput(input.concat(e.target.value));
    }
    const total = () => {
        let expression = eval(input)
        setInput(expression);
    }

    const clear = () => {
        setInput("");
    }
    return (
        <>
            <div className="calculator">
                <input type="text" value={input} readOnly /> <br />
                <button type="button" value="9" onClick={getdata}>9</button>
                <button type="button" value="8" onClick={getdata}>8</button>
                <button type="button" value="7" onClick={getdata}>7</button>
                <button type="button" value="/" onClick={getdata}>/</button><br />
                <button type="button" value="6" onClick={getdata}>6</button>
                <button type="button" value="5" onClick={getdata}>5</button>
                <button type="button" value="4" onClick={getdata}>4</button>
                <button type="button" value="*" onClick={getdata}>*</button><br />
                <button type="button" value="3" onClick={getdata}>3</button>
                <button type="button" value="2" onClick={getdata}>2</button>
                <button type="button" value="1" onClick={getdata}>1</button>
                <button type="button" value="-" onClick={getdata}>-</button><br />
                <button type="button" value="0" onClick={getdata}>0</button>
                <button type="button" value="." onClick={clear}>c</button>
                <button type="button" value="=" onClick={total}>=</button>
                <button type="button" value="+" onClick={getdata}>+</button>

            </div>
        </>
    )
}

export default App