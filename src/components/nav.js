import React, { Component } from 'react';
import logo from '../images/logo1.jpg';

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <img src={logo} alt="GMAGMA" className="image-logo" style={{ width: '120px', height: 'auto', paddingLeft: '10px' }} />
        </ul>
        <ul>
          <li><a href="/GMAGMA-Sitio-V1.1">Inicio</a></li>
          <li><a href="#header">Nosotros</a></li>
          <li><a href="#servicesSection">Servicios</a></li>
          <li><a href="/GMAGMA-Sitio-V1.1/clientes">Clientes</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
