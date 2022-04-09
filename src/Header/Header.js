import { Link, useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
      <img src="gameover.png" width="35" height="35" alt="gameover"></img>
        <Link className="navbar-brand" to="/products">
          Game Over
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              className={
                "nav-link" + (pathname === "/products" ? " active" : "")
              }
              to="/products"
            >
              Games
            </Link>
            <Link
              className={
                "nav-link" + (pathname === "/categories" ? " active" : "")
              }
              to="/categories"
            >
              Categories
            </Link>
            <Link
              className={"nav-link" + (pathname === "/cart" ? " active" : "")}
              to="/cart"
            >
              Cart
            </Link>
            <Link
              className={
                "nav-link" + (pathname === "/contact" ? " active" : "")
              }
              to="/contact"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
