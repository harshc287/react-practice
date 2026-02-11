import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)
    

    
    

  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:'center', flexDirection:"column"}}>
        <h1>Counter</h1>
        <h2>Count:{count}</h2>
        <button onClick={()=> 
          {
            if(count > 0){
              setCount - 1
            }else{
              alert("limit excessed")
            }
          }
        } style={{padding:"14px",marginBottom:"10px", width:"100px", backgroundColor:"#59f1dcff"}}>Decrement</button>
        <button onClick={()=> setCount(count +1)} style={{padding:"14px",width:"100px",cursor:'pointer', backgroundColor:"#72e4b5ff"}} >Increment</button>

    </div>
  )
}

export default Counter
