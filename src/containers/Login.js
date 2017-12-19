import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFieldValue, submitForm, runValidator } from 'redux-duck-form';
import Card from '../styled/Card';
import { Form, TextInput } from '../styled/Form';
import { Title, Subtitle } from '../styled/Text';


const emptyValidator = value => (
  value === '' ? 'Campo requerido' : ''
);

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(ev) {
    ev.preventDefault();
    console.log(submitForm);
    const onSuccess = values => console.log(values);
    const onError = errors => console.log(errors);
    this.props.dispatch(submitForm('loginForm')(onSuccess, onError));
  }

  logChange(fieldName) {
    return (ev) => {
      this.props.dispatch(setFieldValue('loginForm')(fieldName, ev.target.value));
    };
  }

  validateField(fieldName) {
    return () => {
      this.props.dispatch(runValidator('loginForm')(fieldName, emptyValidator));
    };
  }


  render() {
    const { email, password, errors } = this.props;
    const { loading } = this.state;
    return (
      <div>
        <Title>Ingresa como administrador</Title>
        <Card>
          <Form onSubmit={this.onSubmit}>
            <TextInput
              label="Correo electrónico"
              placeholder="admin@pondera.cl"
              value={email}
              onChange={this.logChange('email')}
              errorText={errors.email}
              afterTyping={this.validateField('email')}
            />
            <TextInput
              label="Contraseña"
              placeholder="* * * * * * *"
              type="password"
              value={password}
              onChange={this.logChange('password')}
              errorText={errors.password}
              afterTyping={this.validateField('password')}
            />
            <div className="control is-grouped-right">
              <button
                className={`button is-primary ${loading ? 'is-loading' : ''}`}
                type="submit"
              >
                Ingresar
              </button>
            </div>
          </Form>
        </Card>
      </div>
    );
  }
}

export default connect(state => ({
  email: state.loginForm.email.value,
  password: state.loginForm.password.value,
  errors: {
    email: state.loginForm.email.error,
    password: state.loginForm.password.error,
  },
}))(Login);
