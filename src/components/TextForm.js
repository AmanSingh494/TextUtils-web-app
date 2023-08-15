import React, { useState } from 'react'

export default function TextForm(props) {
  // states
  const [text, setText] = useState('')
  const [weight, setWeight] = useState('normal')
  const [style, setStyle] = useState('normal')

  const upClick = () => {
    setText(text.toUpperCase())
    props.showAlert('Converted to Uppercase', 'success')
  }
  const lowClick = () => {
    setText(text.toLowerCase())
    props.showAlert('Converted to Lowercase', 'success')
  }
  const clearClick = () => {
    setText('')
    props.showAlert('Cleared text', 'success')
  }
  const boldClick = () => {
    setWeight('bold')
    props.showAlert('Made bold', 'success')
  }
  const itaClick = () => {
    setStyle(`italic`)
    props.showAlert('Made Italic', 'success')
  }
  const onChange = (e) => {
    setText(e.target.value)
  }
  const resetClick = () => {
    setWeight('normal')
    setStyle(`normal`)
    props.showAlert('Reset', 'success')
  }
  const copyClick = () => {
    navigator.clipboard.writeText(text)
    props.showAlert('Copied text', 'success')
  }
  const reExSpaClick = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(' '))
    props.showAlert('Eliminated extra spaces', 'success')
  }

  const numWords = text.split(' ').length
  return (
    <>
      <div className={`container text-form-cont my-5`}>
        <h1>{props.heading}</h1>
        <div className='form-floating'>
          <textarea
            onChange={onChange}
            value={text}
            rows='12'
            className={`form-control ${props.addClass}`}
            id='textarea'
            placeholder='Enter your text here'
            spellCheck='false'
            style={{
              height: '100%',
              color: `${props.mode === 'light' ? 'black' : 'white'}`,
              backgroundColor: `${
                props.mode === 'light' ? 'white' : 'rgb(45, 74, 103)'
              }`,
              fontWeight: weight,
              fontStyle: style,
              letterSpacing: '0.04rem'
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
        <button className='btn btn-primary my-4 mx-2' onClick={boldClick}>
          Bold
        </button>
        <button className='btn btn-primary my-4 mx-2' onClick={itaClick}>
          Italic
        </button>
        <button className='btn btn-primary my-4 mx-2' onClick={resetClick}>
          Reset
        </button>
        <button className='btn btn-primary my-4 mx-2' onClick={copyClick}>
          Copy
        </button>
        <button className='btn btn-primary my-4 mx-2' onClick={reExSpaClick}>
          Remove Extra spaces
        </button>
      </div>
      <div className={`container `}>
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
