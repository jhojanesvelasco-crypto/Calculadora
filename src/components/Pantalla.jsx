function Pantalla({ valor, operacion }) {
  return (
    <div className="pantalla">
      <div className="pantalla-operacion">
        {operacion}
      </div>

      <div className="pantalla-valor">
        {valor}
      </div>
    </div>
  );
}

export default Pantalla;
