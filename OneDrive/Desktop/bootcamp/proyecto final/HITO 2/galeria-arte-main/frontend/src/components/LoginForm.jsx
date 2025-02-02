import { useState } from 'react';

const LoginForm = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Login enviado con user:${userEmail} password:${userPassword}`);
    setUserEmail('');
    setUserPassword('');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-view-height">
      <form className="m-3 p-3 rounded" id="loginForm" onSubmit={handleSubmit}>
        <h1 className="text-center p-3">Login</h1>

        <div className="mb-4">
          <input
            type="email"
            id="email"
            className="form-control"
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
          />
          <label className="form-label" htmlFor="email">
            Email
          </label>
        </div>

        <div className="mb-4">
          <input
            type="password"
            id="password"
            className="form-control"
            onChange={(e) => setUserPassword(e.target.value)}
            value={userPassword}
          />
          <label className="form-label" htmlFor="password">
            Contraseña
          </label>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Ingresa
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
