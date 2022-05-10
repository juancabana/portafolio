import React, { Component } from "react";
import imgparcial from "./NGAzmNp.jpeg";
import "./diagonal.css";

class Diagonal extends Component {
  calc() {
    const input = document.getElementById("inputDiagonal");

    const content = input.value;
    const val = content.split(" ");
    let ver = true;

    for (var i = 0; i < val.length; i++) {
      if (val[i].length != val.length) {
        ver = false;
        break;
      }
    }

    if (ver) {
      var principal = 0;
      var secondary = 0;
      for (var i = 0; i < val.length; i++) {
        for (var j = 0; j < val.length; j++) {
          if (i == j) principal += parseInt(val[i][j]);

          if (i + j == val.length - 1) secondary += parseInt(val[i][j]);
        }
      }

      const abs = Math.abs(principal - secondary);
      console.log(principal);
      console.log(secondary);
      alert("El resultado es " + abs);
    } else {
      alert("La matriz no es cuadrada");
    }
  }
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
          <button className="butt-calcDiagonal" onClick={() => this.calc()}>
            Calcular
          </button>
        </section>
      </div>
    );
  }
}

export default Diagonal;
