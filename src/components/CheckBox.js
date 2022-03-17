import '../style/Checkbox.css'

export default function CheckBox(){

  const allIsChecked = () => {
    const checkboxes = document.querySelectorAll('.checkbox');
    let value = false;
    checkboxes.forEach((e) => { if(e.checked === true) value = true });
  }

  return(
    <label className="containerCheckbox">
        <label>
          <input className='checkbox' onClick={ allIsChecked } type='checkbox' name='React'/>
          React
        </label>
        <label>
          <input className='checkbox' onClick={ allIsChecked } type='checkbox' name='Vue'/>
          Vue
        </label>
        <label>
          <input className='checkbox' onClick={ allIsChecked } type='checkbox' name='Angular'/>
          Angular
        </label>
        <label>
          <input className='checkbox' onClick={ allIsChecked } type='checkbox' name='JS'/>
          JavaScript
        </label>
        <label>
          <input className='checkbox' onClick={ allIsChecked } type='checkbox' name='Node'/>
          Node
        </label>
      </label>
  )
}