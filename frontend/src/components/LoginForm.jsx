const LoginForm = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-view-height">
      <form className="m-3 p-3 rounded" id="loginForm">
        <h1 className='text-center p-3'>Login</h1>

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

        <div className="text-center">
            <button type="button" className="btn btn-primary btn-block mb-4">
              Ingresa
            </button>
        </div>
      </form>
    </div>
  
  );
};

export default LoginForm;