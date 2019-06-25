import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
     
      <footer>
          <h3 style={{fontWeight: 'normal'}}>© 2017 CIMADDE, S DE RL DE CV.</h3>
          <p>ventas@gmagma.com</p>
          <ul>
            <li><a href="https://www.facebook.com/GrupoGMAGMA/"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
          </ul>
      </footer>
      
    );
  }
}

export default Footer;
