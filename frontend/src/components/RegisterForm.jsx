import React from 'react';

const RegisterForm = () => {
  return (
    <div className="register-form">
      <h2>Registrarse</h2>
      <form>
        <input type="text" placeholder="Usuario" />
        <input type="email" placeholder="Correo" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterForm;