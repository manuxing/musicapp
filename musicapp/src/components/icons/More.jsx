import React from 'react'

function Button({text}) {
  return (
        <i class="material-icons">
            {text}
        </i>
  )
}

export default React.memo(Button)