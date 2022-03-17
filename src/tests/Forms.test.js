import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import Header from '../components/Header'
import Main from '../pages/Main';
import CheckBox from '../components/CheckBox'
import Counter from '../components/Counter.jsx'


describe('Renderização do componente Header', () => {
  it('Verifica ser possui o título da página', () => {
    render(<Header />);
    const titleOfPage = screen.getByText(/Formulário/i);
    expect(titleOfPage).toBeInTheDocument();
  })

  it('Verifica se possui o ícone da caixa no header', () => {
    render(<Header />);
    const image = screen.getByTestId('image')
    expect(image).toBeInTheDocument();
  })
});

describe('Renderização do componente Checkbox', () => {
  it('Verifica ser possui a pergunta "Quais adesivos:"', () => {
    render(<App />);
    const question = screen.getByText(/Quais adesivos:/i);
    expect(question).toBeInTheDocument();
  })

  it('Verifica se possui as 5 opções de adesivo', () => {
    render(<App />);
    expect(screen.getByText(/React/i)).toBeInTheDocument();
    expect(screen.getByText(/Vue/i)).toBeInTheDocument();
    expect(screen.getByText(/Angular/i)).toBeInTheDocument();
    expect(screen.getByText(/JavaScript/i)).toBeInTheDocument();
    expect(screen.getByText(/Node/i)).toBeInTheDocument();    
  })
});


describe('Renderização do componente Counter', () => {
  it('Verifica ser possui a pergunta "Quais adesivos:"', () => {
    render(<App />);
    const question = screen.getByText(/Quantos adesivos de cada/i);
    expect(question).toBeInTheDocument();
  })

  it('Verifica a existência e a funcionalidade do botão "mais"', () => {
    render(<App />);
    const plusButton = screen.getByTestId('plus');
    expect(plusButton).toBeInTheDocument();
    const quantity = screen.getByTestId('result');

    fireEvent.click(plusButton)
    expect(quantity.value).toBe('1');
    

  })

  it('Verifica a existência e a funcionalidade do botão "menos"', () => {
    render(<App />);
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

describe('Verifica menssagem de erro', () => {
  it('Verifica se finaliza a compra sem informar o adesivo e a quantidade', () => {
    render(<App/>);
    const button = screen.getByText(/ENVIAR/i);
    fireEvent.click(button);
    expect(screen.getByText(/Ooopss/i)).toBeInTheDocument()
  })
})

describe('Verifica menssagem de confirmação', () => {
  it('Verifica se finaliza a compra informando o adesivo e a quantidade', () => {
    render(<App/>);

    const checkbock = screen.getByText(/React/i);
    fireEvent.click(checkbock);

    const addButton = screen.getByTestId('plus');
    fireEvent.click(addButton);

    const button = screen.getByText(/ENVIAR/i);
    fireEvent.click(button);
    expect(screen.getByText(/Obrigado/i)).toBeInTheDocument()
  })
})


