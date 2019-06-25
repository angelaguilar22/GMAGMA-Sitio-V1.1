import React, {Component} from 'react';

export default class ValuesTitle extends Component{
  render(){
    return(
      <div className="values-container">
        <h1 className="values-title">Valores</h1>
        <p style={styles.line}/>
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