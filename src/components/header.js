import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (

      <header id="header">
        <div className="head">
          <h1>NOSOTROS</h1>
          <div>
            <p className="p-change-color" style={{textAlign: 'justify', fontWeight: '500'}}>
              Día a día en Grupo MAGMA estamos en busca de nuevos retos,
              mismos que pongan a prueba la capacidad de nuestro equipo
              de trabajo. Es gracias a nuestro compromiso y empeño que
              se nos han abierto puertas en Empresas de Calidad Mundial.
            </p>
            <div>
              <a className="contact" href="#WeSection">Saber más</a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
