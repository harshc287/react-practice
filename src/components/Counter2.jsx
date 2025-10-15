import React, { useState } from 'react'

const Counter2 = () => {

const [count , setCount] = useState(0)

const increment = ()=>{
    if(count < 10){
        setCount(count + 1)
       
    }
     console.log(count, "count")
}

const decrement = ()=>{
    if(count >0){
        setCount(count-1)
    }
}


  return (
    <>
   
    <h1>Counter between 1 to 10</h1>

    <h4>count{count}</h4>
    <button 
    className='btn btn-dark w-25 '
    onClick={increment}>
        +
    </button>
    <button 
    className='btn btn-dark  w-25 ms-3'
    onClick={decrement}>
        -
    </button>
   
   </>
  )
}

export default Counter2
