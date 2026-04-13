import React, { useState,useEffect } from 'react'

const App = () => {


  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark")
    }
  },[dark])
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition">
    <div className="p-6 rounded-2xl shadow-xl bg-gray-100 dark:bg-gray-800 text-center">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        🌙 Theme Toggle
      </h1>

      <button
        onClick={() => setDark(!dark)}
        className="px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600"
      >
        Switch to {dark ? "Light" : "Dark"}
      </button>
    </div>
  </div>
  )
}

export default App