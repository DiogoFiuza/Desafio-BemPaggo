import { useContext } from 'react';
import MyContext from '../contexts/myContext';
import '../style/SendButton.css';
import Modal from './Modal';
import ModalError from './ModalError';

export default function SendButton(){
  
  const {
    counter,
    modalIsVisible, 
    setVisible,
    checkBoxIsChecked
  } = useContext(MyContext)

  const isSelected = () => {
    if(counter > 0 && checkBoxIsChecked ){
      return <Modal/>
    }
    return <ModalError/>
  }

  return(
    <footer className="buttonContainer">
      <button onClick={ () => setVisible(true)} className="sendButton">ENVIAR</button>
      {modalIsVisible? isSelected() : null}
    </footer>
  )
}