import '../style/Forms.css';
import React from 'react';
import CheckBox from './CheckBox';
import Counter from './Counter';
import TextArea from './TextArea';

export default function Forms() {
  return (
    <section className="formsContainer">
      <h4>Quais adesivos:</h4>
      <CheckBox />
      <h4>Quantos adesivos de cada?</h4>
      <Counter />
      <h4>Observações:</h4>
      <TextArea />
    </section>
  );
}
