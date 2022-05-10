import React, { Component } from "react";
import imgparcial from "./NGAzmNp.jpeg";
import "./diagonal.css";
import "./Parcial.js";

class Diagonal extends Component {
  render() {
    

    return (
      <div className="Diagonal">
        <header>
          <nav className="navbarDiagonal">
            <div className="cont-imgDiagonal">
              <img className="img-NavDiagonal" src={imgparcial} alt="" />
            </div>

            <nav className="nav-wrapperDiagonal">
              <h1 className="text-DiagDiagonal">Diagonal</h1>
              <p className="descriptionDiagonal">
                Aquí puede calcular la diferencia entre diagonales de una matriz
              </p>
            </nav>
          </nav>
        </header>
        <section>
          <input
            id="inputDiagonal"
            type="text"
            placeholder="Ingresa la matriz aquí"
          />
          <br />
          <button className="butt-calcDiagonal" onClick={"calc()"}>
            Calcular
          </button>
        </section>
      </div>
    );
  }
}

export default Diagonal;
