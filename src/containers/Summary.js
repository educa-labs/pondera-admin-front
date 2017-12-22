import React from 'react';
import { connect } from 'react-redux';

const Summary = ({ token }) => {
  if (!token) return <div>Debes ingresar para acceder</div>;
  return (
    <div>
      Resumen
    </div>
  );
};

export default connect(state => ({
  token: state.token,
}))(Summary);
