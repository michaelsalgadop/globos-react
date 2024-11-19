import { useEffect, useState } from "react";
import { Globo } from "./componentes/Globo";
import { Marcador } from "./componentes/Marcador";

function App() {
  const maxAncho = window.innerWidth;
  const maxAlto = window.innerHeight;
  const [posicionActual, setPosicionActual] = useState({
    x: () => getNuevaPosicion(maxAncho),
    y: () => getNuevaPosicion(maxAlto),
  });
  const [contador, setContador] = useState(0);
  useEffect(() => {
    const nuevaPosicion = {
      x: getNuevaPosicion(maxAncho),
      y: getNuevaPosicion(maxAlto),
    };
    setPosicionActual(nuevaPosicion);
  }, [maxAncho, maxAlto]);
  const cambiarPosicion = () => {
    const nuevaPosicion = {
      x: getNuevaPosicion(maxAncho),
      y: getNuevaPosicion(maxAlto),
    };
    setTimeout(() => setPosicionActual(nuevaPosicion), 300);
  };
  const getNuevaPosicion = (tope) => {
    const min = Math.ceil(0);
    return Math.floor(Math.random() * (tope - min + 1)) + min;
  };
  const aumentarContador = () => {
    setContador(contador + 1);
  };
  return (
    <div className="">
      <Globo
        posicionActual={posicionActual}
        setPosicionActual={setPosicionActual}
        cambiarPosicion={cambiarPosicion}
        aumentarContador={aumentarContador}
      ></Globo>
      <Marcador contador={contador}></Marcador>
    </div>
  );
}

export default App;
