import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('Enter Text here')
  const upClick = () => {
    setText(text.toUpperCase())
    console.log('UpperCase button was clicked')
  }
  const onChange = (e) => {
    console.log('OnChange')
    setText(e.target.value)
  }
  return (
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
          style={{ height: '100%' }}
        ></textarea>
      </div>
      <button className='btn btn-dark my-4' onClick={upClick}>
        Convert to Uppercase
      </button>
    </div>
  )
}
