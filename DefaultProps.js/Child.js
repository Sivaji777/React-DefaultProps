import React from 'react'

function Child(props) {


  // <h1>{props.price}</h1>
  // <h1>{props.color}</h1>
  return (
    <div>
    <h1>Child Component.............</h1>
      <h1>{props.mobilename}</h1>
      <h1>{props.price}</h1>
      <h1>{props.color}</h1>

    </div>
  )
}

Child.defaultProps={
mobilename:'redmi',
price:'20000',
color:'red'
}

export default Child