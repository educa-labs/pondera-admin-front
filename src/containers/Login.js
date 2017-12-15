import React, { Fragment } from 'react';
import Card from '../styled/Card';
import { Form, TextInput } from '../styled/Form';
import { Title, Subtitle } from '../styled/Text';



const Login = () => (
  <Fragment>
    <Title>Ingresa como administrador</Title>
    <Card>
      <Form>
        <TextInput
          label="Correo electrónico"
          placeholder="admin@pondera.cl"
        />
        <TextInput
          label="Contraseña"
          placeholder="* * * * * * *"
          type="password"
        />
        <div className="control is-grouped-right">
          <button className="button is-primary">Submit</button>
        </div>
      </Form>
    </Card>
  </Fragment>
);

export default Login;
