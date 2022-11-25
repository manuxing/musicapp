import React from 'react'

function Button({text, action, value}) {
  action = action !== undefined ? action : console.log()
  value =  value ? value : 0
  return (
        <i onClick={()=>action(value)} class="material-icons">
            {text}
        </i>
  )
}

export default React.memo(Button)