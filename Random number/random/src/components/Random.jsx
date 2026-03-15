




import { useState } from 'react';



const Random = () => {

    const [min, setMin] = useState(1);
const [max, setMax] = useState(100);
const [number, setNumber] = useState(null)

const generateNumber = () => {
    const random = Math.floor(Math.random() * (max - min + 1)) + Number(min);
    setNumber(random);
}
  return (
      <div className=" bg-amber-800 min-h-screen flex items-center justify-center ">
          <div className="bg-white shadow-xl rounded-2xl p-8 w-80 text-center">
              
              <h1 className="text-2xl font-bold mb-6">Random number generator</h1>

              <div className="flex gap-3 mb-4">
                  
                  <input
                      type="number"
                      value={min}
                      onChange={(e) => setMin(e.target.value)}
                      className='w-1/2 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
                      placeholder='Min'
                  />


                    <input
                      type="number"
                      value={max}
                      onChange={(e) => setMax(e.target.value)}
                      className='w-1/2 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
                      placeholder='Max'
                  />
              </div>
              
              <button
                  onClick={generateNumber}
                  className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition'
              >
                  Generate
                  
              </button>
              {number !== null && (
                  <div className="mt-6 text-3xl font-bold text-blue-600">
                      {number}
                  </div>
              )}

          </div>
    </div>
  )
}

export default Random