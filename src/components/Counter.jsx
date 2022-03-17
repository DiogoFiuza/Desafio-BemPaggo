import React, { useContext } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import MyContext from '../contexts/myContext';

import '../style/Counter.css';

export default function Counter() {
  const { counter, setCounter } = useContext(MyContext);

  const setFloor = () => {
    setCounter(counter - 1);
    if (counter <= 0) setCounter(0);
  };

  return (
    <section className="counterContainer">
      <button type="button" data-testid="minus" className="button" onClick={() => setFloor()}>
        <AiOutlineMinus />
      </button>
      <input data-testid="result" className="inputValue" value={counter} />
      <button type="button" data-testId="plus" className="button" onClick={() => setCounter(counter + 1)}>
        <AiOutlinePlus />
      </button>
    </section>
  );
}
