function Teclado({ onClick }) {
  const botones = [
    "AC", "DEL", "%", "÷",
    "7", "8", "9", "×",
    "4", "5", "6", "−",
    "1", "2", "3", "+",
    "0", ".", "="
  ];

  return (
    <div className="teclado">
      {botones.map((boton) => (
        <button
          key={boton}
          onClick={() => onClick(boton)}
          className={["÷", "×", "−", "+", "="].includes(boton)
            ? "boton operador"
            : ["AC", "DEL", "%"].includes(boton)
            ? "boton especial"
            : "boton"}
        >
          {boton}
        </button>
      ))}
    </div>
  );
}

export default Teclado;