import React from 'react'

export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }
  return (
    // only if the first condition is truthy than the last code will render.
    // set height to remove cumulative layout shift
    <div style={{ height: '50px' }}>
      {props.alert && (
        <div style={{ height: '50px' }}>
          <div
            className={`alert alert-${props.alert.type} alert-dismissible fade show`}
            role='alert'
          >
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
          </div>
        </div>
      )}
    </div>
  )
}
