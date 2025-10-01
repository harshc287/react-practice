import { useState } from 'react'

import tilakImg from "./assets/tilak.jpg"
import './App.css'

function App() {
 
  return (
    <>
      <div className='mainDiv'>
        <h1 className='heading'>Tilak Bhai Ki Jai Ho</h1>
        <img src={tilakImg} alt="tilak" />
        <p className='para'>Tilak Varma was born in Kukatpally neighbourhood of Hyderabad, Andhra Pradesh (now in Telangana) on 8 November 2002 into a Telugu famliy.[5] His father Namboori Nagaraju Varma hails from Medchal, Telangana and worked as an electrician, whereas his mother Namboori Gayatri Devi hails from Bhimavaram, Andhra Pradesh and is a housewife. He has1. Bayash trained him at the Legala Cricket Academy in Lingampally, Hyderabad providing transport for the journey of more than 40 kilometres (25 mi) each way until Varma's family moved closer to the academy.[7][8][9][10]
lege in the city.[11][12]</p>
    <button className='readBtn' onClick={()=> window.open("https://en.wikipedia.org/wiki/Tilak_Varma")}>Read More</button>
      </div>
    </>
  )
}

export default App
