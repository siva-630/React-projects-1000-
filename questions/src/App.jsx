import { useState } from 'react'

const App = () => { 
  const faqs = [
    {
      question: "what is React",
      answer:"React is a javascript library for building user interface"
    },
    {
      question: "What is tailwindcss css?",
      answer:"tailwindcss is a utility-first css framework for styling."
    },
    {
      question: "what is a component?",
      answer:"A component is a reusable piece of ui in react"
    },

  ]
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-00 to-purple-600">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-96">
        <div className="text-2xl font-bold mb-4 text-center"> FAQ</div>
        {faqs.map((faq, index) => (
          <div className="mb-2 border-b" key={index}>
            <button className='w-full text-left py-2 font-medium flex justify-between items-center'
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "_" : "+"}</span>
            </button>

            {openIndex === index && (
              <p className="text-gray-600 pb-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App