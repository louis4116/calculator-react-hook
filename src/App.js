import React, { useState } from "react";
import "./App.css";

function App() {
  const [curNumber, setCurNumber] = useState("");
  const [prevNumber, setPrevNumber] = useState("");
  const [symbol, setSymbol] = useState("");
  const handler = (e) => {
    if (curNumber.includes(".") && e.target.value === ".") {
      return;
    }

    setCurNumber(curNumber.concat(e.target.value));
  };
  const allClear = () => {
    setCurNumber("");
    setPrevNumber("");
    setSymbol("");
  };
  const clear = () => {
    setCurNumber(curNumber.slice(0, -1));
  };
  const operate = (e) => {
    setSymbol(e.target.value);
    if (curNumber === "") {
      return;
    }
    if (prevNumber !== "") {
      calculate();
    } else {
      setCurNumber("");
      setPrevNumber(curNumber);
    }
  };
  const calculate = () => {
    const prev = parseFloat(prevNumber);
    const cur = parseFloat(curNumber);
    console.log(symbol)
    if (isNaN(prev) || isNaN(cur)) {
      return;
    }
    let result;
    switch (symbol) {
      case "+":
        result = prev + cur;
        break;
      case "-":
        result = prev - cur;
        break;
      case "*":
        result = prev * cur;
        break;
      case "÷":
        result = prev / cur;
        break;
    }
    
    setPrevNumber(result.toString());
    setCurNumber("");
  };
  return (
    <div className="App">
      <div className="result">
        <div className="result-first">{prevNumber}</div>
        <div className="result-second">
          <div>{symbol}</div>
        <div>{curNumber}</div>
          
        </div>
      </div>
      <div className="test">
        <button className="AC" onClick={allClear}>
          AC
        </button>
        <button onClick={clear}>C</button>
        <button onClick={operate} value="÷">
          ÷
        </button>
        <button onClick={handler} value="7">
          7
        </button>
        <button onClick={handler} value="8">
          8
        </button>
        <button onClick={handler} value="9">
          9
        </button>
        <button onClick={operate} value="*">
          *
        </button>
        <button onClick={handler} value="4">
          4
        </button>
        <button onClick={handler} value="5">
          5
        </button>
        <button onClick={handler} value="6">
          6
        </button>
        <button onClick={operate} value="-">
          -
        </button>
        <button onClick={handler} value="2">
          1
        </button>
        <button onClick={handler} value="2">
          2
        </button>
        <button onClick={handler} value="3">
          3
        </button>
        <button onClick={operate} value="+">
          +
        </button>
        <button onClick={handler} value="0">
          0
        </button>
        <button onClick={handler} value=".">
          .
        </button>
        <button className="eva" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
