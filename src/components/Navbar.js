import "../style/navbar.scss";
import { TiArrowSortedDown } from "react-icons/ti";
import { FiMenu } from "react-icons/fi";
import React, { useEffect, useRef } from "react";
import { TweenMax } from "gsap/all";
import { Expo } from "gsap/all";

const Navbar = () => {
  const nav = useRef();
  const linkTab = useRef();

  useEffect(() => {
    TweenMax.from(".nav", 0.8, {
      opacity: 0,
      delay: 0.8,
      y: "-50px",
      ease: Expo.easeInOut
    });
  }, []);

  const transformHandle = () => {
    document.querySelector(".link").classList.toggle("slideTab");
  };

  return (
    <nav className="nav" ref={nav}>
      <h1 className="logo">
        Nextmic <br />
        <small>Tech.Education</small>{" "}
      </h1>
      <div className="link" ref={linkTab}>
        <div className="dropdown">
          <a href="#home" className="arrow-drop">
            Produk <TiArrowSortedDown />{" "}
          </a>
          <div className="dropdown-content">
            <a href="#home">
              <span>Ayo join sekarang!</span>
              <br />
              banyak keuntungan yang didapat.
            </a>
          </div>
        </div>
        <a href="#home">Login</a>
        <button className="btn daftar">Daftar Sekarang</button>
      </div>
      <FiMenu className="bar" onClick={transformHandle} />
    </nav>
  );
};

export default Navbar;
