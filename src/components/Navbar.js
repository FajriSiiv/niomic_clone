import "../style/navbar.scss";
import { TiArrowSortedDown } from "react-icons/ti";
const Navbar = () => {
  return (
    <nav className="nav">
      <h1 className="logo" aria-logo="logo">
        Niomic <br />
        <small>Tech.Education</small>{" "}
      </h1>
      <div className="link">
        <div class="dropdown">
          <a href="#" className="arrow-drop">
            Produk <TiArrowSortedDown />{" "}
          </a>
          <div class="dropdown-content">
            <a href="#">
              <span>Ayo join sekarang!</span>
              <br />
              banyak keuntungan yang didapat.
            </a>
          </div>
        </div>
        <a href="#">Login</a>
        <button className="btn daftar">Daftar Sekarang</button>
      </div>
    </nav>
  );
};

export default Navbar;
