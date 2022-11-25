import React from 'react'

function Button({text}) {
  return (
        <i className="material-icons">
            {text && text}
        </i>
  )
}

export default React.memo(Button)