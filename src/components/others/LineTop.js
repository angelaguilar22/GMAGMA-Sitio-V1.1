import React, { Component } from 'react';

export default class LineTop extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div style={this.props.style}>
        <p style={styles.desing}></p>
      </div>
    );
  }
}

/*Local Styles of component*/
const styles = {
  desing: {
    borderTop: '5px dashed #BDBDBD',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}