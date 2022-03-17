import React from 'react';
import { BsBoxSeam } from 'react-icons/bs';
import '../style/Header.css';

function Header() {
  return (
    <header className="mainHeader">
      <div className="titleContainer">
        <p className="titleOfHeader">
          Formulário
          <br />
          para compra de
          <br />
          <b>Pacote de adesivos</b>
        </p>
      </div>
      <div className="boxContainer">
        <BsBoxSeam data-testid="image" className="boxImg" />
      </div>
    </header>
  );
}

export default Header;
