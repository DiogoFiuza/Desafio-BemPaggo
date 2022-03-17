import '../style/Checkbox.css'

export default function CheckBox(){
  return(
    <label className="containerCheckbox">
        <label>
          <input type='checkbox' name='React'/>
          React
        </label>
        <label>
          <input type='checkbox' name='Vue'/>
          Vue
        </label>
        <label>
          <input type='checkbox' name='Angular'/>
          Angular
        </label>
        <label>
          <input type='checkbox' name='JS'/>
          JavaScript
        </label>
        <label>
          <input type='checkbox' name='Node'/>
          Node
        </label>
      </label>
  )
}