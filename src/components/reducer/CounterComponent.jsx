import React, { useReducer } from 'react'
import { counterReducer, initialState } from './counterReducer'

const CounterComponent = () => {

    const [state, dispatch] = useReducer(counterReducer , initialState)

  return (
    <div className='w-50 text-center mx-auto p-4 bg-secondary text-white'>
      <h1>Reducer Counter</h1>
      Count : {state.count}
      <button onClick={()=>dispatch({type : 'increament'})} className='btn btn-dark ms-3 '>+ INC..</button>
      <button onClick={()=>dispatch({type : 'decreament'})} className='btn btn-dark ms-3'>- DEC...</button>
      <button onClick={()=>dispatch({type : 'reset'})} className='btn btn-dark ms-3'>RESET...</button>


    </div>
  )
}

export default CounterComponent
