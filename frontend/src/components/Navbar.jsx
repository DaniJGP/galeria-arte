import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md" data-bs-theme="dark">
      <div className="container-lg">
        <div className="navbar-brand">
          <img src="../assets/images/logo.png" alt="Galería de Arte" id="myBrand" b/>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarLinks"
          aria-controls="navbarLinks"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarLinks">
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
          <div className="navbar-nav gap-2">
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
      </div>
    </nav>
  );
};

export default Navbar;
