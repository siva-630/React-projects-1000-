import React, { useState } from 'react'

const A = () => {

    const [text, setText] = useState("");
  return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-500 to-purple-600">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-96 text-center">
              <h1 className="text-2xl font-bold mb-4">Character Counter</h1>

              <textarea
                  row="5"
                  placeholder='Type Something ...'
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className='w-full p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400'
              
              ></textarea>

              <div className="text-lg space-y-1">
                  <p>Character:{text.length}</p>
                  <p>Words: {text.trim() ?  text.trim().split(/\s+/).length:0}</p>
              </div>
          </div>
    </div>
  )
}

export default A