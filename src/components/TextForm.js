import React, { useState } from 'react'

export default function TextForm(props) {
  // states
  const [text, setText] = useState('')
  const [randomColor, setColor] = useState('black')
  const [bacRandomColor, setRanColor] = useState('white')
  const [weight, setWeight] = useState('normal')
  const [style, setStyle] = useState('normal')

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
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    setColor(`rgb(${r},${g},${b})`)
  }
  const bacColClick = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    setRanColor(`rgb(${r},${g},${b})`)
  }
  const boldClick = () => {
    setWeight('bold')
  }
  const itaClick = () => {
    setStyle(`italic`)
  }
  const onChange = (e) => {
    setText(e.target.value)
  }
  const resetClick = () => {
    setWeight('normal')
    setStyle(`normal`)
    setRanColor(`white`)
    setColor(`black`)
  }
  const numWords = text.split(' ').length
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
            spellCheck='false'
            style={{
              height: '100%',
              color: randomColor,
              backgroundColor: bacRandomColor,
              fontWeight: weight,
              fontStyle: style
            }}
          ></textarea>
        </div>
        <button className='btn btn-dark my-4 mx-2' onClick={upClick}>
          Uppercase
        </button>
        <button className='btn btn-dark my-4 mx-2' onClick={lowClick}>
          Lowercase
        </button>
        <button className='btn btn-danger my-4 mx-2' onClick={clearClick}>
          Clear text
        </button>
        <button className='btn btn-info my-4 mx-2' onClick={colClick}>
          Change Color
        </button>
        <button className='btn btn-success my-4 mx-2' onClick={bacColClick}>
          Change Background Color
        </button>
        <button className='btn btn-primary my-4 mx-2' onClick={boldClick}>
          Bold
        </button>
        <button className='btn btn-primary my-4 mx-2' onClick={itaClick}>
          Italic
        </button>
        <button className='btn btn-primary my-4 mx-2' onClick={resetClick}>
          Reset
        </button>
      </div>
      <div className='container'>
        <h1>Your text summary</h1>
        <p>
          {numWords} words and {text.length} characters{' '}
        </p>
        <p>{0.004 * numWords} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
