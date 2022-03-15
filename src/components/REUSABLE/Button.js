import React from 'react'

const Button = ({ _text, _class, _action, _additional }) => {
   return (
      <button onClick={ _action } className={ _class }>
         <p> { _text  }</p>
         <span> { _additional } </span>
      </button>
   )
}

export default Button
