import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md" data-bs-theme="dark">
      <div className="container-lg">
        <div className="navbar-brand">
          <img src="../assets/images/logo.png" alt="Galería de Arte" id="myBrand" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarLinks"
          aria-controls="navbarLinks"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarLinks">
          <div className="navbar-nav ms-3 me-auto">
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/registro">Registro</Link>
            <Link className="nav-link" to="/">Tienda</Link>
          </div>
          <div className="navbar-nav gap-2">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
                data-bs-theme="light"
              />
              <button className="btn btn-dark" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <Link to="#" className="nav-link">
              <i className="fa-solid fa-user fa-lg"></i>
            </Link>
            <Link to="#" className="nav-link">
              <i className="fa-solid fa-cart-shopping fa-lg"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
