import { useState } from 'react';
import '../style/SendButton.css';
import Modal from './Modal';

export default function SendButton(){
  const [modalIsVisible, setVisible] = useState(false);

  return(
    <footer className="buttonContainer">
      <button onClick={ () => setVisible(true)} className="sendButton">ENVIAR</button>
      {modalIsVisible? 
        <Modal finished={() => setVisible(false)}/>
        : null
      }
    </footer>
  )
}