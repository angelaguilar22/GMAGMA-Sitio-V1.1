import React, { Component } from 'react';

export default class Identity extends Component {
  render() {
    return (
      <div className=".div-dismis" style={styles.container}>
        <div style={styles.containerBlack}>
          <div style={styles.containerGray}>
            <h3 style={styles.subtitle}>
              DESARROLLANDO ESTRATEGIAS INNOVADORAS
            </h3>
            <h1 style={styles.title}>
              GMAGMA
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

//Styles for component
const styles = {
  container: {
    backgroundColor: 'black',
    paddingTop: '100px',
  },
  containerBlack: {
    paddingTop: '100px',
    paddingBottom: '100px'
  },
  containerGray: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CDCDCD',
    fontWeight: 'bold',
    position: 'static',
    display: 'grid',
    width: '100%',
    height: 'auto',
    minHeight: 'auto',
    gridTemplateRows: '1fr',
    gridTemplateColumns: '100%'
  },
  subtitle: {
    textAlign: 'center',
    color: '#808080',
    marginBottom: '5px'
  },
  title: {
    textAlign: 'center',
    fontSize: '60px',
    marginTop: 0,
    marginBottom: 10,
    color: '#808080'
  }

}