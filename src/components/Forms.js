import '../style/Forms.css'

export default function Forms(){
  return(
    <form className="fomsContainer">
      <label className="containerCheckbox">
        <h4>Quais adesivos:</h4>
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
      </label>
    </form>
  )
}