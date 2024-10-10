import { useReducer, useState } from 'react';
import './App.css';
import reducer, { ADICIONAR_FRASE, REMOVER_FRASE } from './reducer';

function App() {
  const [frase, setFrase] = useState("");
  const [frases, dispatchFrases] = useReducer(reducer, []);

  const salvarFrase = (evento) => {
    evento.preventDefault();
    dispatchFrases({
      tipo: ADICIONAR_FRASE,
      frase
    });
  }

  const removerFrase = (fraseExcluida) => {
    dispatchFrases({
      tipo: REMOVER_FRASE,
      frase: fraseExcluida
    });
  }

  return (
    <div className="App">
      <form onSubmit={salvarFrase}>
        <textarea value={frase} onInput={(evento) => setFrase(evento.target.value)} required/>
        <br/>
        <button>Salvar</button>
      </form>

      {frases.map((fraseAtual, index) => <p key={index}>{fraseAtual} - <button onClick={() => removerFrase(fraseAtual)}>Remover</button></p>)}
    </div>
  );
}

export default App;
