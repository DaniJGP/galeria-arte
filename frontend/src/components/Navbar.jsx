import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="../assets/images/logo.png" alt="Galería de Arte" className="logo" />
      <ul className="nav-links">
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/gallery">Artistas</a>
        </li>
        <li>
          <a href="/cart">Carrito</a>
        </li>
        <li>
          <a href="/login">Iniciar sesión</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-primary" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
