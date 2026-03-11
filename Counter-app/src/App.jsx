import React, { useState } from "react";


const App = () => {
  
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-5xl flex items-center ">Counter App</h1>
      
      <div className="">count : {count}</div>
      <div onClick={() => {
        setCount(count+1)
      }}>+</div>
      <div onClick={() => {
        count-1
      }}> - </div>
      <div onClick={() => {
        setCount(0)
      }}>Reset</div>


    </div>
  )
}
export default App;