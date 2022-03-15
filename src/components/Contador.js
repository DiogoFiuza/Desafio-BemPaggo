import React, { useEffect, useState } from "react"

export default function Contador(){
  const [counter, setCounter] = useState(0)

  useEffect(() => {

  })

  return(
    <section>
      <button onClick={ () => setCounter( counter + 1)}> + </button>
      <input  value={ counter } />
      <button onClick={ () => setCounter( counter - 1)}> - </button>
    </section>
  )
}