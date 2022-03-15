import '../style/Forms.css'
import CheckBox from './CheckBox'
import Contador from './Contador'

export default function Forms(){
  return(
    <section className="formsContainer">
      <h4>Quais adesivos:</h4>
      <CheckBox/>
      <h4>Quantos adesivos de cada?</h4>
      <Contador/>
    </section>
  )
}