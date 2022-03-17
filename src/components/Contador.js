import React, { useState } from "react"
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import '../style/Contador.css'

export default function Contador(){
  const [counter, setCounter] = useState(0)

  const travaZero = (event) => {
    setCounter(counter - 1);
    if(counter <= 0) setCounter(0);
  }

  return(
    <section className="counterContainer">
      <button data-testId='minus' className="button" onClick={ () => travaZero() }>
        <AiOutlineMinus/>
      </button>
      <input data-testId='result' className="inputValue" value={ counter } />
      <button data-testId='plus' className="button" onClick={ () => setCounter( counter + 1) }>
        <AiOutlinePlus/>
      </button>
    </section>
  )
}