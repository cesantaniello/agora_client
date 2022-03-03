import React from 'react';
import { Form, Button} from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {toast} from 'react-toastify';

export default function ChangePasswordForm(props) {
  const {user, logout} = props;
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formData) => {
      console.log(formData);
    },
  });

  return (
    <div className="change-password-form">
      <h4>Cambia tu contraseña</h4>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
            name="password" 
            type="password" 
            placeholder="Tu nueva contraseña" 
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.errors.password}
          />
          <Form.Input 
            name="repeatPassword" 
            type="password" 
            placeholder="Confirma tu nueva contraseña" 
            onChange={formik.handleChange}
            value={formik.values.repeatPassword}
            error={formik.errors.repeatPassword}
          />
        </Form.Group>
        <Button type="submit" className="submit">Actualizar</Button>
      </Form>
    </div>
  )
}

function initialValues() {
  return {
    password: '',
    repeatPassword: '',
  }
}

function validationSchema() {
  return {
    password: Yup.string().required(true).oneOf([Yup.ref('repeatPassword')], true),
    repeatPassword: Yup.string().required(true).oneOf([Yup.ref('password')], true),
  }
}