import { useState } from "react";
import { Globo } from "./componentes/Globo";
import { Marcador } from "./componentes/Marcador";

function App() {
  const maxAncho = window.innerWidth;
  const maxAlto = window.innerHeight;
  const getPosicionAleatoria = {
    top: Math.floor(Math.random() * maxAlto),
    left: Math.floor(Math.random() * maxAncho),
  };
  const [posicion, setPosicion] = useState(getPosicionAleatoria);
  const [contador, setContador] = useState(0);

  const cambiarPosicion = () => {
    setTimeout(() => setPosicion(getPosicionAleatoria), 300);
  };

  const incrementarContador = () => {
    setContador(contador + 1);
  };
  return (
    <div className="">
      <Globo
        posicion={posicion}
        cambiarPosicion={cambiarPosicion}
        incrementarContador={incrementarContador}
      ></Globo>
      <Marcador contador={contador}></Marcador>
    </div>
  );
}

export default App;
