import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFly } from "@fortawesome/free-brands-svg-icons";
export const Globo = (props) => {
  const {
    posicionActual,
    setPosicionActual,
    cambiarPosicion,
    aumentarContador,
  } = props;

  return (
    <div className="App">
      <FontAwesomeIcon
        icon={faFly}
        id="globo"
        className="globo fab fa-fly"
        style={{ top: posicionActual.y, left: posicionActual.x }}
        onMouseOver={cambiarPosicion}
        onClick={aumentarContador}
      />
    </div>
  );
};
