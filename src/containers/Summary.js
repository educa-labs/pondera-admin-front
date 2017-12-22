import React, { Component } from 'react';
import { connect } from 'react-redux';

class Summary extends Component {
  render() {
    if (!token) return <div>Debes ingresar para acceder</div>;
    return (
      <div>
        Resumen
      </div>
    );
  }
}

export default connect(state => ({
  token: state.token,
}))(Summary);
