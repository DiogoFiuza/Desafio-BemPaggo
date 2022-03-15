import React, { useState } from "react"

export default function Contador(){
  const [count, setCount] = useState(0)

  return(
    <section>
      <button 
        className="plus"
        onClick={() => setCount(count+1)}
      >+</button>
      <input type='number' value={count}/>
      <button 
        className="minus"
        onClick={() => setCount(count+1)}
      >-</button>
    </section>
  )
}