import { useContext } from 'react';
import MyContext from '../contexts/myContext';
import '../style/Modal.css'

export default function Modal(){
  const { setVisible } = useContext(MyContext)
  return(
    <div onClick={() => setVisible(false)} className="modal">
      <div className="modalContainer">
          <h1 className="titleModel">Obrigado pela preferência!😄</h1>
          <img className="imgAdesivos" src='../images/capa_adesivos.jpg' alt='imagem de adesivos'/>
          <p>Dentro de poucos dias você receberá seu pedido</p>
          <button onClick={() => setVisible(false)} className="finishButton">Finalizar</button>
      </div>
    </div>
  )
}