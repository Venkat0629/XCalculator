import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [value, setValue] = useState(null);
  const buttons = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"];
  const handleChange = (e) => setData(e.target.value);
  const handleClick = (e) => {
    const sign = e.target.id;
    if (sign !== "=" && sign !== "C")
      setData((prevData) => prevData + "" + sign);
    else {
      if (sign === "C") {
        setData("");
        setValue(null);
      }
      if (sign === "=") {
        try {
          if (data !== "") setValue(eval(data));
          else setValue("Error");
        } catch (error) {
          console.log(error);
          alert("Invalid Input!");
        }
      }
    }
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type="text" value={data} onChange={handleChange}></input>

      {value && <div className="result">{value}</div>}

      <div className="calculator">
        {buttons.map((button) => (
          <button
            key={button}
            id={button}
            className="button"
            onClick={handleClick}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
