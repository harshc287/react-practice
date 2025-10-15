import React, { useState } from 'react'


const Calculator = () => {

    const [num1 ,setNum1] = useState()
    const [num2 ,setNum2] = useState()
    console.log(num1)
    console.log(num1)
    const [result, setResult] = useState(0);

    function handleAddition(){
        const add = Number(num1) + Number(num2)
        setResult(add)
    }
    
    function subtraction(){
        const sub = Number(num1) - Number(num2)
        setResult(sub)
    }

    function multiplication(){
        const multi = Number(num1) * Number(num2)
        setResult(multi)
    }

    function division(){
        const div = Number(num1) / Number(num2)
        setResult(div)
    }

  return (
    <>
    <div className='text-center container bg-secondary text-white mx-auto my-3 p-3'>
    <h1>REACT-CALCULATOR</h1>
    <div>
    <input type="number"  onChange={(e)=> setNum1(e.target.value)}/>
    <input type="number" onChange={(e)=> setNum2(e.target.value)}/>
    <div style={{height:"30px "}}>{result}</div>
    </div>
    <div className=' my-3'>
    <button className="btn btn-dark me-2" onClick={handleAddition}>+</button>
    <button className="btn btn-dark me-2" onClick={subtraction}>-</button>
    <button className="btn btn-dark me-2" onClick={multiplication}>*</button>
    <button className="btn btn-dark" onClick={division}>\</button>
    </div>
    </div>
    </>
  )
}

export default Calculator
