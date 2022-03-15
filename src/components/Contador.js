import React, { useState } from "react"
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import '../style/Contador.css'

export default function Contador(){
  const [counter, setCounter] = useState(0)

  return(
    <section className="counterContainer">
      <button className="button" onClick={ () => setCounter( counter - 1)}><AiOutlineMinus/></button>
      <input className="inputValue" value={ counter } />
      <button className="button" onClick={ () => setCounter( counter + 1)}><AiOutlinePlus/> </button>
    </section>
  )
}