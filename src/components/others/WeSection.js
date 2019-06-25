import React, {Component} from 'react';

export default class WeSection extends Component{
  render(){
    return(
      <div className="we-container">  
        <h1 className="we-title">Nosotros</h1>
        <p style={styles.line}/>
        <p style={{textAlign: 'justify', fontWeight: '500'}}>
          Somos una empresa que con entusiasmo y ganas de 
          hacer bien las cosas se seguirán generando más 
          oportunidades en las que daremos todo lo que esté 
          a nuestro alcance para lograr cubrir las expectativas 
          e ir más allá de lo que nuestros clientes esperan y con 
          esto, en un futuro cercano, ser una gran empresa reconocida 
          por el excelente servicio y compromiso que ofrecemos.
        </p>
      </div>
    );
  }
}

const styles = {
  line: {
    borderTop: '6px solid #F2960C', 
    width: '20%', 
    marginRight: 'auto', 
    marginLeft: 'auto', 
    marginBottom: '30px'
  }
}