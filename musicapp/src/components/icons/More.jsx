import React from 'react'

function Button({text}) {
  return (
    <div>
        <i class="material-icons">
            {text}
        </i>
    </div>
  )
}

export default React.memo(Button)