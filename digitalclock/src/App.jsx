


import React, { useState } from 'react'

const App = () => {

  const [time, setTime] = useState(new Date());
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-800">
      <div className="">

         <h1 className="">Digital clock</h1>
      </div>
    </div>
  )
}

export default App