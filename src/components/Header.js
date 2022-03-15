import React from "react";
import '../style/Header.css';


function Header(){
  return(
    <header className="mainHeader">
      <div className="titleContainer">
        <p className="titleOfHeader">
        Formulário<br/> 
        para compra de <br/>
        <b>Pacote de adesivos</b>
        </p> 
      </div>
    </header>
  )
}

export default Header