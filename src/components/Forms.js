import '../style/Forms.css'
import CheckBox from './CheckBox'
import Contador from './Contador'
import TextArea from './TextArea'

// Roboto

export default function Forms(){
  return(
    <section className="formsContainer">
      <h4>Quais adesivos:</h4>
      <CheckBox/>
      <h4>Quantos adesivos de cada?</h4>
      <Contador/>
      <h4>Observações:</h4> 
      <TextArea/>
    </section>
  )
}