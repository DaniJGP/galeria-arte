import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand" data-bs-theme="dark">
      <div className="container">
        <div className="navbar-brand">
          <img src="../assets/images/logo.png" alt="Galería de Arte" />
        </div>
        <div class="navbar-nav ms-3 me-auto">
          <a class="nav-link" href="#">
            Login
          </a>
          <a class="nav-link" href="#">
            Registro
          </a>
          <a class="nav-link" href="#">
            Tienda
          </a>
        </div>
        <div className="navbar-nav">
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
              data-bs-theme="light"
            />
            <button class="btn btn-dark" type="submit">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          <a href="#" className="nav-link">
            <i class="fa-solid fa-user fa-lg"></i>
          </a>
          <a href="#" className="nav-link">
            <i class="fa-solid fa-cart-shopping fa-lg"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
