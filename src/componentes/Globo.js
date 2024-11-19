export const Globo = (props) => {
  const { posicion, cambiarPosicion, incrementarContador } = props;
  return (
    <i
      id="globo"
      className="globo fab fa-fly"
      onClick={incrementarContador}
      onMouseOver={cambiarPosicion}
      style={{ top: posicion.top, left: posicion.left }}
    ></i>
  );
};
