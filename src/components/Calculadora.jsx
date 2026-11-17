import { useState } from "react";
import Pantalla from "./Pantalla";
import Teclado from "./Teclado";
import { calcular } from "../utils/operaciones.jsx";
import "../styles/calculadora.css";

function Calculadora() {
  const [valor, setValor] = useState("0");
  const [anterior, setAnterior] = useState(null);
  const [operador, setOperador] = useState(null);
  const [nuevoNumero, setNuevoNumero] = useState(false);

  function manejarClick(boton) {
    // Instructor jeferson el AC borrar todo lo q tenga en la calculadora
    if (boton === "AC") {
      setValor("0");
      setAnterior(null);
      setOperador(null);
      setNuevoNumero(false);
      return;
    }

    // esta funcion borra el ultimo numero y el proceso es 
    if (boton === "DEL") {
      setValor(valor.length > 1 ? valor.slice(0, -1) : "0");
      return;
    }

    // Agregar punto decimal
    if (boton === ".") {
      if (!valor.includes(".") && !nuevoNumero) {
        setValor(valor + ".");
      } else if (nuevoNumero) {
        setValor("0.");
        setNuevoNumero(false);
      }
      return;
    }

    // Seleccionar una operación
    if (["+", "−", "×", "÷"].includes(boton)) {
      setAnterior(Number(valor));
      setOperador(boton);
      setNuevoNumero(true);
      return;
    }

    // Calcular el resultado
    if (boton === "=") {
      if (anterior !== null && operador !== null) {
        const resultado = calcular(
          anterior,
          Number(valor),
          operador
        );

        setValor(String(resultado));
        setAnterior(null);
        setOperador(null);
        setNuevoNumero(true);
      }
      return;
    }

    // Calcular porcentaje
    if (boton === "%") {
      setValor(String(Number(valor) / 100));
      setNuevoNumero(true);
      return;
    }

    // Escribir números
    if (!isNaN(Number(boton))) {
      if (nuevoNumero) {
        setValor(boton);
        setNuevoNumero(false);
      } else {
        setValor(valor === "0" ? boton : valor + boton);
      }
    }
  }

  return (
    <div className="calculadora">
      <h1>Mi Calculadora</h1>

      <Pantalla
        valor={valor}
        operacion={operador || ""}
      />

      <Teclado onClick={manejarClick} />
    </div>
  );
}

export default Calculadora;
