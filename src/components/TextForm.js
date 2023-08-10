import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('')
  const [randomColor, setColor] = useState('black')
    const [bacRandomColor, setRanColor] = useState('white')
  const upClick = () => {
    setText(text.toUpperCase())
  }
  const lowClick = () => {
    setText(text.toLowerCase())
  }
  const clearClick = () => {
    setText('')
  }
const colClick = () => {
    const r = Math.floor(Math.random()*256)
        const g = Math.floor(Math.random()*256)
        const b = Math.floor(Math.random()*256)
    setColor(`rgb(${r},${g},${b})`)
}
  const bacColClick = () => {
    const r = Math.floor(Math.random()*256)
        const g = Math.floor(Math.random()*256)
        const b = Math.floor(Math.random()*256)
    setRanColor(`rgb(${r},${g},${b})`)
  }
  const onChange = (e) => {
    console.log('OnChange')
    setText(e.target.value)
  }
  const numWords = text.split(" ").length
  return (
    <>
      <div className='container my-5'>
        <h1>{props.heading}</h1>
        <div className='form-floating'>
          <textarea
            onChange={onChange}
            value={text}
            rows='12'
            className='form-control'
            id='floatingTextarea'
            placeholder='Enter your text here'
            style={{ height: '100%' , color: randomColor, backgroundColor: bacRandomColor}}
          ></textarea>
        </div>
        <button className='btn btn-dark my-4 mx-2' onClick={upClick}>
          Uppercase
        </button>
        <button className='btn btn-dark my-4 mx-2' onClick={lowClick}>
          Lowercase
        </button>
        <button className='btn btn-dark my-4 mx-2' onClick={clearClick}>
         Clear text
        </button>
        <button className='btn btn-info my-4 mx-2' onClick={colClick}>
         Change Color
        </button>
        <button className='btn btn-success my-4 mx-2' onClick={bacColClick}>
         Change Background Color
        </button>
        <button className='btn btn-success my-4 mx-2' onClick={bacColClick}>
         Change Background Color
        </button>
        <button className='btn btn-success my-4 mx-2' onClick={bacColClick}>
         Change Background Color
        </button>
      </div>
      <div className="container">
        <h1>Your text summary</h1>
        <p>{numWords} words and {text.length} characters </p>
        <p>{0.004*numWords} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
