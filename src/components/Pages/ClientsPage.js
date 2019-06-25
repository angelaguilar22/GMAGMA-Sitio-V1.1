import React, { Component } from 'react';
export default class ClientsPage extends Component {

  render() {
    return (
      <div className="div-container">
        <div style={{ backgroundColor: 'black', width: '90%', paddingBottom: '40px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
          <h1 className="clients-title" style={{ margin: 0, paddingTop: '50px', paddingBottom: '80px' }}>Clientes</h1>
          <div style={{ backgroundColor: '#464646', padding: '10px 0 10px 0' }}>
            <p style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', color: 'white' }}>Somos una empresa que tiene como objetivo principal brindar un excelente servicio al cliente. Estamos convencidos que con actitud positiva y trabajando en pro de nuestra filosofía, lograremos que nuestros clientes se sientan siempre satisfechos.</p>
          </div>
        </div>

        <div className="div-img-container" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <img style={{ marginLeft: 'auto', marginRight: 'auto' }} alt="hope" src={require('../../images/clients/hope.webp')} />
          <img style={{ marginLeft: 'auto', marginRight: 'auto' }} alt="mitsui" src={require('../../images/clients/mitsui.webp')} />
          <img style={{ marginLeft: 'auto', marginRight: 'auto' }} alt="suntak" src={require('../../images/clients/suntak.webp')} />
          <img style={{ marginLeft: 'auto', marginRight: 'auto' }} alt="capricornio" src={require('../../images/clients/capricornio.webp')} />
          <img style={{ marginLeft: 'auto', marginRight: 'auto' }} alt="rubena" src={require('../../images/clients/rubena.webp')} />
          <img style={{ marginLeft: 'auto', marginRight: 'auto' }} alt="datwyler" src={require('../../images/clients/datwiler.webp')} />
          <img style={{ marginLeft: 'auto', marginRight: 'auto' }} alt="franki" src={require('../../images/clients/fransis.webp')} />
          <img style={{ marginLeft: 'auto', marginRight: 'auto' }} alt="xtra" src={require('../../images/clients/extra.webp')} />
          <img style={{ marginLeft: 'auto', marginRight: 'auto' }} alt="hfi" src={require('../../images/clients/hfi.webp')} />
        </div>
      </div>
    );
  }
}