import React, { Component } from 'react';
import eye from '../../images/eye.png';

export default class VisionSecion extends Component {
  render() {
    return (

      <div>
        <div className="vision-div">
          <div className="vision-card">
            <div className="vision-img-container">
              <img src={eye} alt='Visión' className="vision-img"/>
            </div>
            <div className="vision-content-container">
              <p className="vision-title" style={{marginBottom: '30px'}}>
                Visión
              </p>
              <p className="vision-content">
                Ser reconocidos en la región como una empresa solida con altos estándares de calidad y productividad.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
