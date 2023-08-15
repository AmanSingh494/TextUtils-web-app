import React from 'react'

export default function ThemeSideBar(props) {
  return (
    <div className={`container theme-bar ${props.addClass}`}>
      <ul>
        <div className='heading'>
          <h2 className='my-4'>Themes</h2>
        </div>
        <li onClick={props.chooseMode}>Light</li>
        <li onClick={props.chooseMode} name='dark'>
          Dark
        </li>
        <li onClick={props.chooseMode} name='blue'>
          Blue
        </li>
        <li onClick={props.chooseMode} name='purple'>
          Purple
        </li>
        <li onClick={props.chooseMode} name='orange'>
          Orange
        </li>
      </ul>
    </div>
  )
}
