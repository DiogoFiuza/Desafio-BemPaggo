import './App.css';
import React, { useState } from 'react';
import Main from './pages/Main';

import MyContext from './contexts/myContext';

function App() {
  const [counter, setCounter] = useState(0);
  const [modalIsVisible, setVisible] = useState(false);
  const [checkBoxIsChecked, setCheckBox] = useState(false);

  const data = {
    counter,
    setCounter,
    modalIsVisible,
    setVisible,
    checkBoxIsChecked,
    setCheckBox,
  };

  return (
    <MyContext.Provider value={data}>
      <div className="App">
        <Main />
      </div>
    </MyContext.Provider>
  );
}

export default App;
