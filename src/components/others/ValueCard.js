import React, { Component } from 'react';

export default class ValueCard extends Component {

  render() {
    return (
      <div className="card-div">

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', padding: '20px 0 0 20px' }}>
          <img src={this.props.icon} alt={this.props.title} style={{ width: '30px', height: 'auto', backgroundColor: '#5598A1', borderRadius: '50%', margin: '10px', padding: '10px' }} />
        </div>
        <div style={{ margin: '10px' }}>
          <p className="card-title" >{this.props.title}</p>
          <p style={{ textAlign: 'justify', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px' }}>
            {this.props.content}
          </p>
        </div>

      </div>
    );
  }
}