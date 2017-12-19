import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFieldValue, submitForm, runValidator } from 'redux-duck-form';
import Card from '../styled/Card';
import { Form, TextInput } from '../styled/Form';
import { Title } from '../styled/Text';
import * as api from '../api';


const emptyValidator = value => (
  value === '' ? 'Campo requerido' : ''
);

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(ev) {
    ev.preventDefault();
    const onSuccess = (values) => {
      this.setState({ loading: true });
      api.createSession(values)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          if (err.response) {
            this.setState({ error: err.response.data.message });
          } else {
            this.setState({ error: 'Oops! algo salió mal' });
          }
        })
        .then(() => {
          this.setState({ loading: false });
        });
    };
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
    const { loading, error } = this.state;
    return (
      <div>
        <Title>Ingresa como administrador</Title>
        <Card>
          <Form onSubmit={this.onSubmit}>
            <TextInput
              label="Correo electrónico"
              placeholder="admin@pondera.cl"
              value={email}
              onChange={this.logChange('mail')}
              errorText={errors.email}
              afterTyping={this.validateField('mail')}
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
            <br />
            {error && (
              <div className="notification is-danger">
                <button onClick={() => this.setState({ error: '' })} className="delete" />
                {error}
              </div>
            )}
          </Form>
        </Card>
      </div>
    );
  }
}

export default connect(state => ({
  mail: state.loginForm.mail.value,
  password: state.loginForm.password.value,
  errors: {
    mail: state.loginForm.mail.error,
    password: state.loginForm.password.error,
  },
}))(Login);
