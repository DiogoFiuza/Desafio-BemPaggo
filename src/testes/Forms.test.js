import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import Header from '../components/Header'
import CheckBox from '../components/CheckBox'
import Contador from '../components/Contador'


describe('Renderização do componente Header', () => {
  it('Verifica ser possui o título da página', () => {
    render(<Header />);
    const titleOfPage = screen.getByText(/Formulário/i);
    expect(titleOfPage).toBeInTheDocument();
  })

  it('Verifica se possui o ícone da caixa no header', () => {
    render(<Header />);
    const imagem = screen.getByTestId('imagem')
    expect(imagem).toBeInTheDocument();
  })
});

describe('Renderização do componente Checkbox', () => {
  it('Verifica ser possui a pergunta "Quais adesivos:"', () => {
    render(<App />);
    const question = screen.getByText(/Quais adesivos:/i);
    expect(question).toBeInTheDocument();
  })

  it('Verifica se possui as 5 opções de adesivo', () => {
    render(<CheckBox />);
    const reactOption = screen.getByLabelText('React');
    expect(reactOption.name).toEqual('React');
  })
});


describe('Renderização do componente Contador', () => {
  it('Verifica ser possui a pergunta "Quais adesivos:"', () => {
    render(<App />);
    const question = screen.getByText(/Quantos adesivos de cada/i);
    expect(question).toBeInTheDocument();
  })

  it('Verifica a existência e a funcionalidade do botão "mais"', () => {
    render(<Contador />);
    const plusButton = screen.getByTestId('plus');
    expect(plusButton).toBeInTheDocument();
    const quantity = screen.getByTestId('result');

    fireEvent.click(plusButton)
    expect(quantity.value).toBe('1');
    

  })

  it('Verifica a existência e a funcionalidade do botão "menos"', () => {
    render(<Contador />);
    const plusButton = screen.getByTestId('plus');
    expect(plusButton).toBeInTheDocument();
    const minusButton = screen.getByTestId('minus');
    expect(minusButton).toBeInTheDocument();
    const quantity = screen.getByTestId('result');

    fireEvent.click(plusButton)
    expect(quantity.value).toBe('1');
    fireEvent.click(minusButton);
    expect(quantity.value).toBe('0');
    // O trecho abaixo testa se o contator está negativando
    fireEvent.click(minusButton);
    expect(quantity.value).toBe('0');
  })
});


