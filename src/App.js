import { useState } from 'react';
import './App.css';

function App() {
  // lista de frases (estado)

  // o usuário pode adicionar novas frases, desde que:
    // a frase possua mais do que 20 caracteres
    // a frase seja única

  const [frase, setFrase] = useState("");
  const [frases, setFrases] = useState([]);

  const salvarFrase = (evento) => {
    evento.preventDefault();

    if (frase.length < 20) {
      alert("Ops... A frase precisa ter, pelo menos, 20 caracteres!");
      return;
    }

    if (frases.includes(frase)) {
      alert("Ops... Não pode haver frases duplicadas!");
      return;
    }

    setFrases([...frases, frase]);
  }

  return (
    <div className="App">
      <form onSubmit={salvarFrase}>
        <textarea value={frase} onInput={(evento) => setFrase(evento.target.value)} required/>
        <br/>
        <button>Salvar</button>
      </form>

      {frases.map((fraseAtual) => <p>{fraseAtual}</p>)}
    </div>
  );
}

export default App;
