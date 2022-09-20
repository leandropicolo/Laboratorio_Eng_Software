import logo from './fatec.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Venha para o vestibular da Fatec
        </h1>
        <p className="paragrafo">Aproveite essa oportunidade e garanta o seu futuro</p>
        <p className="paragrafo">Corra pois as vagas são limitadas</p>
        <a
          className="App-link"
          href="https://www.vestibularfatec.com.br/home/"
          target="_blank"
          rel="noopener noreferrer"
          title="Vem pra Fatec"
        >
          Faça sua inscrição aqui
        </a>
        <a
          className="App-link"
          href="https://www.vestibularfatec.com.br/classificacao/"
          target="_blank"
          rel="noopener noreferrer"
          title="Classificação"
        >
          Ver classificação
        </a>
      </header>
    </div>
  );
}

export default App;
