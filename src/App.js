import React, { useState } from 'react'
import data from './data'

function App() {
  const [text, setText] = useState([])
  const [count, setCount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)

    if (count < 0) {
      amount = 1
      setCount(1)
    }
    if (count > 9) {
      amount = 9
      setCount(9)
    }
    if (count) {
      setText(data.slice(0, amount))
    }
    console.log(amount)
  }

  return (
    <section className='section-center'>
      <h3>Tired of boring Lorem ipsum?</h3>
      <form onSubmit={handleSubmit} className='lorem-form'>
        <label htmlFor=''>paragraphs :</label>
        <input
          type='number'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        ></input>
        <button className='btn'>generate</button>
      </form>
      {text.map((t, index) => {
        return (
          <p key={index} className='lorem-form'>
            {t}
          </p>
        )
      })}
    </section>
  )
}

export default App

// function App() {
//   const [texts, setTexts] = useState([])
//   const [count, setCount] = useState(0)

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     let amount = parseInt(count)
//     console.log(amount)
//     setTexts(data.slice(0, amount))
//   }

//   return (
//     <section className='section-center'>
//       <h3>Tired of boring Lorem ipsum?</h3>
//       <form onSubmit={handleSubmit} className='lorem-form'>
//         <label>paragraphs :</label>
//         <input
//           type='number'
//           value={count}
//           onChange={(e) => setCount(e.target.value)}
//         ></input>
//         <button type='submit' className='btn'>
//           generate
//         </button>
//       </form>
//       <article className='lorem-form'>
//         {texts.map((text, index) => {
//           return <p key={index}>{text}</p>
//         })}
//       </article>
//     </section>
