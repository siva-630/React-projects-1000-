


import React, { useEffect, useState } from 'react'

const App = () => {

  const [time, setTime] = useState(new Date());
  const [is24, setIs24] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  },[])
 
  const formatTime = () => {
    return time.toLocaleTimeString("en-US", {
      hour12: !is24,
    });
  };

  const formateDate = () => {
    return time.toLocaleTimeString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day:"numeric"
    })
  }


  return (
    <div className="min-h-screen flex items-center justify-center  from-black to-gray-800 bg-blue-400">
      <div className=" backdrop-blur-lg p-10 rounded-2xl shadow-2xl bg-amber-100">

        <h1 className="text-2xl font-bold mb-5">Digital clock</h1>
        <div className="text-5xl font-mono mb-4">
          {formatTime()}
        </div>
        <div className="text-lg mb-6">
          {formateDate()}
        </div>
        <button
          onClick={() => {
            setIs24(!is24)
            c
          }} className="px-5  bg-blue-500 rounded-lg hover:bg-blue-100  transition">
          switch to {is24 ? "12-hour":"24-hour"}

        </button>
      </div>
    </div>
  )
}

export default App