import React, { useState } from 'react'
import PropTypes from 'prop-types'
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
  // switch (props.theme) {
  //   case 'dark':
  //     setPath(
  //   'M479.765-340Q538-340 579-380.765q41-40.764 41-99Q620-538 579.235-579q-40.764-41-99-41Q422-620 381-579.235q-41 40.764-41 99Q340-422 380.765-381q40.764 41 99 41Zm.235 60q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM70-450q-12.75 0-21.375-8.675Q40-467.351 40-480.175 40-493 48.625-501.5T70-510h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T170-450H70Zm720 0q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T790-510h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T890-450H790ZM479.825-760Q467-760 458.5-768.625T450-790v-100q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-890v100q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Zm0 720Q467-40 458.5-48.625T450-70v-100q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-170v100q0 12.75-8.675 21.375Q492.649-40 479.825-40ZM240-678l-57-56q-9-9-8.629-21.603.37-12.604 8.526-21.5 8.896-8.897 21.5-8.897Q217-786 226-777l56 57q8 9 8 21t-8 20.5q-8 8.5-20.5 8.5t-21.5-8Zm494 495-56-57q-8-9-8-21.375T678.5-282q8.5-9 20.5-9t21 9l57 56q9 9 8.629 21.603-.37 12.604-8.526 21.5-8.896 8.897-21.5 8.897Q743-174 734-183Zm-56-495q-9-9-9-21t9-21l56-57q9-9 21.603-8.629 12.604.37 21.5 8.526 8.897 8.896 8.897 21.5Q786-743 777-734l-57 56q-8 8-20.364 8-12.363 0-21.636-8ZM182.897-182.897q-8.897-8.896-8.897-21.5Q174-217 183-226l57-56q8.8-9 20.9-9 12.1 0 20.709 9Q291-273 291-261t-9 21l-56 57q-9 9-21.603 8.629-12.604-.37-21.5-8.526ZM480-480Z'
  //     )
  //     break
  //   case 'blue':
  //     setPath(
  //       'M743-631q-26 26-58 38.5T619-580q-34 0-66-12.5T495-631l-75-75q-17-17-37.5-25t-42.5-8q-22 0-42.5 8T260-706l-68 68-43-43 68-68q26-26 58-38.5t65-12.5q33 0 64.5 12.5T462-749l75 75q17 17 37.5 25.5T618-640q23 0 44-8.5t38-25.5l68-68 43 43-68 68Zm0 210q-26 26-58 38.5T619-370q-34 0-66-12.5T495-421l-75-75q-17-17-37.5-25t-42.5-8q-22 0-42.5 8T260-496l-68 68-43-42 68-69q26-26 58-38.5t65-12.5q33 0 64.5 12.5T462-539l75 75q17 17 38 25.5t44 8.5q23 0 43.5-8.5T700-464l68-68 43 43-68 68Zm-1 210q-26 26-57.5 38.5T619-160q-34 0-66-12.5T495-211l-76-75q-17-17-37.5-25t-42.5-8q-22 0-42.5 8T259-286l-68 68-42-42 68-69q26-26 57.5-38.5T339-380q33 0 65 12.5t58 38.5l75 75q17 17 38 25.5t44 8.5q23 0 43.5-8.5T700-254l68-68 42 43-68 68Z'
  //     )
  //     break
  //   case 'purple':

  //     break
  //   case 'orange':
  //     setPath(
  //       'M480-120q-117 0-198.5-81.5T200-400q0-100 61.5-176.5T420-674q-26-5-50-14.5T327-717q-28-29-37.5-67t-9.5-78v-18q86-2 148 56.5T489-680q14-43 39.5-80t57.5-69q9-9 21-9t21 9q9 9 9 21t-9 21q-25 25-45 54t-34 61q94 24 152.5 99.5T760-400q0 117-81.5 198.5T480-120Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Zm0-220Z'
  //     )
  //     break

  //   default:
  //     setPath(
  //       'M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q8 0 17 .5t23 1.5q-36 32-56 79t-20 99q0 90 63 153t153 63q52 0 99-18.5t79-51.5q1 12 1.5 19.5t.5 14.5q0 150-105 255T480-120Zm0-60q109 0 190-67.5T771-406q-25 11-53.667 16.5Q688.667-384 660-384q-114.689 0-195.345-80.655Q384-545.311 384-660q0-24 5-51.5t18-62.5q-98 27-162.5 109.5T180-480q0 125 87.5 212.5T480-180Zm-4-297Z'
  //     )
  //     break
  // }
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
