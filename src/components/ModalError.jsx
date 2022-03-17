import React, { useContext } from 'react';
import MyContext from '../contexts/myContext';
import '../style/ModalError.css';

export default function ModalError() {
  const { setVisible } = useContext(MyContext);
  return (
    <div onClick={() => setVisible(false)} className="modalError">
      <div className="modalErrorContainer">
        <h1 className="titleModelError">Ooopss...Algo deu errado!</h1>
        <img className="imgError" src="./images/emoji.png" alt="imagem de error" />
        <p>Vamos tentar novamente ?</p>
        <button type="button" onClick={() => setVisible(false)} className="finishButton">OK</button>
      </div>
    </div>
  );
}
