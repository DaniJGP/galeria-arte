const RegisterForm = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-view-height">
      <form className="m-3 p-3 rounded" id="registerForm">
        <h1 className='text-center p-3'>Registro</h1>
        <div className="row mb-4">
          <div className="col">
            <div>
              <input type="text" id="nombre" className="form-control" />
              <label className="form-label" for="nombre">
                Nombre
              </label>
            </div>
          </div>
          <div className="col">
            <div>
              <input type="text" id="apellido" className="form-control" />
              <label className="form-label" for="apellido">
                Apellido
              </label>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <input type="email" id="email" className="form-control" />
          <label className="form-label" for="email">
            Email
          </label>
        </div>

        <div className="mb-4">
          <input type="password" id="password" className="form-control" />
          <label className="form-label" for="password">
            Contraseña
          </label>
        </div>

        <div className="mb-4">
          <input type="password" id="password2" className="form-control" />
          <label className="form-label" for="password2">
            Repita contraseña
          </label>
        </div>

        <div className="text-center">
            <button type="button" className="btn btn-primary btn-block mb-4">
              Registrarse
            </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
