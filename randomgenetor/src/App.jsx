import React, { useState } from 'react'

const App = () => {

  const quotoes = [
    { text: "Believe in yourself", author: "Unknown" },
    { text: "Stay hungry stay foolish.", author: "siva" },
    { text: "success is not final failure is not fatal", author: "Winstone" },
    
  ];

  const [quote, setQuote] = useState(quotoes[0])
  
  const getRandomQuote = () => {
    const random = quotoes[Math.floor(Math.random() * quotoes.length)]

    setQuote(random)
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-96 text-center">
        <div className="text-2xl font-bold mb-4"> Quote Generator</div>

        <p className="text-lg italic mb-2">
          "{quote.text}"
        </p>
        <p className='text-sm text-gray-500 mb-4'>
          -{quote.author}
        </p>
        <button onClick={getRandomQuote}
        className ='bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition'
        >
          New Quote


        </button>
      </div>
     </div>
  )
}

export default App