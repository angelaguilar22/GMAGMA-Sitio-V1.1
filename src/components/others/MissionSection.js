import React, {Component} from 'react';
import mission from '../../images/target.png';

export default class MissionSection extends Component{
  render(){
    return(
      <div className="vision-div">
        <div className="mission-card">
          <div style={{ display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
            <img src={mission} alt='Misión' style={{width: '60px', height: 'auto', backgroundColor: '#F2960C', borderRadius: '50%', padding: '15px'}}/>
          </div>
          <div style={{margin: '10px'}}> 
            <p className="vision-title" style={{paddingLeft: '20px', paddingRight: '20px', borderBottom: '2px', borderColor: '#F2960C'}}>Misión</p>
            <p style={{textAlign: 'justify', paddingLeft: '20px', paddingRight: '20px'}}>
              Proveer productos y servicios de calidad total, desarrollando 
              soluciones innovadoras que den respuesta eficaz y eficientemente 
              a las problemáticas presentadas en la industria.
            </p>
          </div>
        </div>
      </div>
    );
  }
}