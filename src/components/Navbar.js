import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} rounded`}
      aria-label='Eleventh navbar example'
    >
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
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
              <a className='nav-link active' aria-current='page' href='/'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='/'>
                About
              </a>
            </li>
          </ul>
          <button style={{ border: '0', backgroundColor: 'rgb(33, 37, 41)' }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='30'
              viewBox='0 -960 960 960'
              width='30'
              className='my-3 mx-2'
              style={{
                backgroundColor: 'rgb(33, 37, 41)',
                borderRadius: '50%'
              }}
              // onClick={}
            >
              <path
                fill='white'
                d='M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q8 0 17 .5t23 1.5q-36 32-56 79t-20 99q0 90 63 153t153 63q52 0 99-18.5t79-51.5q1 12 1.5 19.5t.5 14.5q0 150-105 255T480-120Zm0-60q109 0 190-67.5T771-406q-25 11-53.667 16.5Q688.667-384 660-384q-114.689 0-195.345-80.655Q384-545.311 384-660q0-24 5-51.5t18-62.5q-98 27-162.5 109.5T180-480q0 125 87.5 212.5T480-180Zm-4-297Z'
              />
            </svg>
          </button>
          <form role='search'>
            <input
              className='form-control'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
          </form>
          <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label text-light" for="flexSwitchCheckDefault">Enable dark mode</label>
</div>
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
