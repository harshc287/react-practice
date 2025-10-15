import React, { useState } from 'react'

const ChangeHeading = () => {

  const [heading, setheading] = useState('Harsh Chouhan Nam he')

  return (
    <div>
      <h1>{heading}</h1>
      <button onClick={()=> setheading("Swagat He Apka")}>Cahnge Name</button>
    </div>
  )
}

export default ChangeHeading
