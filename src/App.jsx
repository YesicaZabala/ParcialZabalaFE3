import { useState } from "react";
import Card from "./Component/Card";
import "./App.css";

function App() {
  const [usuario, setUsuario] = useState({
    nombre: "",
    cantante: "",
    
  });

  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);

  const onSubmitForm = (e) => {
    e.preventDefault();

    const nombreSinEspacios = usuario.nombre.trim();
    if (nombreSinEspacios.length > 2 && usuario.cantante.length > 5) {
      setEnviado(true);
      setError(false);
    } else {
      setError(true);
      setEnviado(false);
    }
  };

  return (
    <>
      <div className="App">
        <h1>Gustos musicales</h1>
        <form onSubmit={onSubmitForm}>
          <label>Ingresa tu nombre</label>
          <input
            type="text"
            onChange={(event) =>
              setUsuario({ ...usuario, nombre: event.target.value })
            }
          />

          <label>Ingresa tu cantante favorito</label>
          <input
            type="text"
            onChange={(event) =>
              setUsuario({ ...usuario, cantante: event.target.value })
            }
          />

          <button type="submit">Enviar</button>
          {enviado && <Card usuario={usuario} />}
          {error && (
            <h3 style={{ color: "red" }}>
              “Por favor chequea que la información sea correcta”.
            </h3>
          )}
        </form>
      </div>
    </>
  );
}

export default App;
