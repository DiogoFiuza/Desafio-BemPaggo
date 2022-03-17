import React from "react";
import '../style/Modal.css'
import img from '../images/capa_adesivos.jpg'

export default function Modal({ finished }){
  return(
    <div className="modal">
      <div className="modalContainer">
          <h1 className="titleModel">Obrigado pela preferência!😄</h1>
          <img className="imgAdesivos" src={img} alt='imagem de adesivos'/>
          <p>Dentro de poucos dias você receberá seu pedido</p>
          <button onClick={finished} className="finishButton">Finalizar</button>
      </div>
    </div>
  )
}