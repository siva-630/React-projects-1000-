import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clear = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-72">

        {/* Display */}
        <input
          type="text"
          value={input}
          readOnly
          className="w-full mb-4 p-3 text-right border rounded-lg text-xl"
        />

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">

          {/* Numbers */}
          {[7,8,9].map(n => (
            <button key={n} onClick={() => handleClick(n)}
              className="btn">{n}</button>
          ))}
          <button onClick={() => handleClick("/")} className="btn bg-orange-400">÷</button>

          {[4,5,6].map(n => (
            <button key={n} onClick={() => handleClick(n)}
              className="btn">{n}</button>
          ))}
          <button onClick={() => handleClick("*")} className="btn bg-orange-400">×</button>

          {[1,2,3].map(n => (
            <button key={n} onClick={() => handleClick(n)}
              className="btn">{n}</button>
          ))}
          <button onClick={() => handleClick("-")} className="btn bg-orange-400">−</button>

          <button onClick={() => handleClick("0")} className="btn col-span-2">0</button>
          <button onClick={() => handleClick(".")} className="btn">.</button>
          <button onClick={() => handleClick("+")} className="btn bg-orange-400">+</button>

          {/* Actions */}
          <button onClick={clear} className="btn bg-red-500 col-span-2">C</button>
          <button onClick={calculate} className="btn bg-green-500 col-span-2">=</button>

        </div>
      </div>
    </div>
  );
}