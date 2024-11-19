export const Marcador = (props) => {
  const { contador } = props;
  return (
    <div className="marcador">
      <span id="numero">{contador}</span>
    </div>
  );
};
