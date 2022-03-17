import { useContext } from 'react';
import MyContext from '../contexts/myContext';
import '../style/SendButton.css';
import Modal from './Modal';

export default function SendButton(){
  
  const { modalIsVisible, setVisible} = useContext(MyContext)

  return(
    <footer className="buttonContainer">
      <button onClick={ () => setVisible(true)} className="sendButton">ENVIAR</button>
      {modalIsVisible? 
        <Modal />
        : null
      }
    </footer>
  )
}