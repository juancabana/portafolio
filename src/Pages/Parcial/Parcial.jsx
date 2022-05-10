import React, { Component } from "react";
import imgparcial from "./NGAzmNp.jpeg";
import './index.css';
import { Link } from "react-router-dom";

class Parcial extends Component {
  render() {
    
    return (
      <div className="Parcial">
        <div className="containerParcial">
          <div className="contentParcial">
            <h1 className="h1parcial">Este es mi parcial para programación en la web</h1>
            <p className="pParcial">
              Hola, soy Juan David Cabana Trejos y este es mi parcial para el
              curso de programación en la web, tengo el #1, por lo que tengo que
              calcular la diferencia absoluta entre las sumas de las diagonales
              de una matriz
            </p>

            <div className="buttonsParcial">
              <div className="btnParcial btn-diag">
                <Link to="/diagonal">Diagonal</Link>
              </div>

              <div className="btnParcial btn-dist">
                <a href="#">Distancia</a>
              </div>
            </div>
          </div>
          <div className="cont-imgDiagonal">
            <img className="img" src={imgparcial} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Parcial;
