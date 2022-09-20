import logo from './fatec.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Venha para o vestibular da Fatec
        </p>
        <a
          className="App-link"
          href="https://www.vestibularfatec.com.br/home/"
          target="_blank"
          rel="noopener noreferrer"
          title="Vem pra Fatec"
        >
          Faça sua inscrição aqui
        </a>
      </header>
    </div>
  );
}

export default App;
