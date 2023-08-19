import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
export default function Navbar(props) {
  // fixed-navigation
  // const [navClass, setNavClass] = useState(
  //   `navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} rounded `
  // )
  const [svgBackground, setSvgBackground] = useState(
    `${props.mode} === 'light ? 'white' : 'black'`
  )

  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar')
    const scrollHeight = document.documentElement.scrollTop
    const navHeight = nav.getBoundingClientRect().height
    if (scrollHeight > navHeight) {
      nav.classList.add('fixed-nav')
      setSvgBackground(nav.style.backgroundColor)
    } else {
      nav.classList.remove('fixed-nav')
    }
  })

  return (
    <nav
      className={`navbar navbar-expand-lg rounded ${props.navClass}`}
      aria-label='Eleventh navbar example'
    >
      <div className='container-fluid'>
        <a className={`navbar-brand ${props.navClass}`} href='/'>
          {props.title}
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarsExample09'
          aria-controls='navbarsExample09'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarsExample09'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a
                className={`nav-link active ${props.navClass}`}
                aria-current='page'
                href='/'
              >
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={`nav-link active ${props.navClass}`}
                aria-current='page'
                href='/'
              >
                About
              </a>
            </li>
          </ul>
          {/* night mode button */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='30'
            viewBox='0 -960 960 960'
            width='30'
            className='my-3 mx-2'
            style={{
              borderRadius: '50%',
              backgroundColor: `${svgBackground}`
            }}
            onClick={props.toggleMode}
          >
            <path fill={props.fill} d={props.path} />
          </svg>
          {/* <form role='search'>
            <input
              className='form-control'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
          </form> */}
          {/* <div className='form-check form-switch mx-3'>
            <input
              className='form-check-input'
              type='checkbox'
              role='switch'
              id='flexSwitchCheckDefault'
              onClick={props.toggleMode}
            />
            <label
              className={`form-check-label text-${
                // this is wow, ternary operator, condition ? <if true> : <if false>
                props.mode === 'light' ? 'dark' : 'light'
              }`}
              for='flexSwitchCheckDefault'
            >
              Enable {props.mode === 'light' ? 'dark' : 'light'} mode
            </label>
          </div> */}
        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = { title: PropTypes.string.isRequired }
// setting deafault prop so that title get renderes even if i don't pass its value
Navbar.defaultProps = {
  title: 'TextUtils'
}
