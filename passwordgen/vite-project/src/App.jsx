import React, { useState } from 'react'

const App = () => {

  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");

  const genpassword = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let pass = " ";

    for (let i = 0; i < length; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)]
    }
    setPassword(pass);
  };

  const copypassword = () => {
    navigator.clipboard.writeText(password);
    alert("Copied");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-80 text-center">
        <h1 className="text-2xl font-bold mb-4">Password Generator</h1>
        <input type="number"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className = "w-full p-2 border rounded-lg mb-4 "
        />
        <button
          onClick={genpassword}
          className='bg-indigo-500 text-white px-4 py-2 rounded-lg mb-4 hover:bg-indigo-600'
        >
          Generate

        </button>
        {password && (
          <div>
            <p className="mb-2 break-all">{password}</p>
            <button
              onClick={copypassword}
              className='text-sm text-indigo-600 underline '
            >
              copy

            </button>
            </div>
        )}
      </div>
    </div>
  )
}

export default App