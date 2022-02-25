import React from 'react'

export default function RegisterForm(props) {
  const {showLoginForm} = props;

  return (
    <>
      <h1>Estamos en RegisterForm</h1>
      <button onClick={showLoginForm}>Ir a Login</button>
    </>
  )
}
