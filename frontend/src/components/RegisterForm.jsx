import { useState } from 'react';

const RegisterForm = () => {
  const emptyForm = {
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    password2: '',
  };

  const [formData, setFormData] = useState(emptyForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('Registro enviado');
    //console.table(formData);
    setFormData(emptyForm);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-view-height">
      <form className="m-3 p-3 rounded" id="registerForm" onSubmit={handleSubmit}>
        <h1 className="text-center p-3">Registro</h1>
        <div className="row mb-4">
          <div className="col">
            <div>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="form-control"
                onChange={handleChange}
              />
              <label className="form-label" htmlFor="nombre">
                Nombre
              </label>
            </div>
          </div>
          <div className="col">
            <div>
              <input
                type="text"
                id="apellido"
                name="apellido"
                className="form-control"
                onChange={handleChange}
              />
              <label className="form-label" htmlFor="apellido">
                Apellido
              </label>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="email">
            Email
          </label>
        </div>

        <div className="mb-4">
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="password">
            Contraseña
          </label>
        </div>

        <div className="mb-4">
          <input
            type="password"
            id="password2"
            name="password2"
            className="form-control"
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="password2">
            Repita contraseña
          </label>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
