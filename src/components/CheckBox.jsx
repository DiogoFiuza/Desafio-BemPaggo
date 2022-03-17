import '../style/Checkbox.css';
import React, { useContext } from 'react';
import MyContext from '../contexts/myContext';

export default function CheckBox() {
  const { setCheckBox } = useContext(MyContext);

  const allIsChecked = () => {
    const checkboxes = document.querySelectorAll('.checkbox');
    let value = false;
    checkboxes.forEach((e) => { if (e.checked === true) value = true; });
    setCheckBox(value);
  };

  return (
    <div className="containerCheckbox">
      <label htmlFor="React">
        <input className="checkbox" onClick={allIsChecked} type="checkbox" id="React" />
        React
      </label>
      <label htmlFor="Vue">
        <input className="checkbox" onClick={allIsChecked} type="checkbox" id="Vue" />
        Vue
      </label>
      <label htmlFor="Angular">
        <input className="checkbox" onClick={allIsChecked} type="checkbox" id="Angular" />
        Angular
      </label>
      <label htmlFor="JS">
        <input className="checkbox" onClick={allIsChecked} type="checkbox" id="JS" />
        JavaScript
      </label>
      <label htmlFor="Node">
        <input className="checkbox" onClick={allIsChecked} type="checkbox" id="Node" />
        Node
      </label>
    </div>
  );
}
