import React from "react";
import "../style/belajar.scss";
import Cards from "./cards";
export default function Belajar() {
  return (
    <section className="belajar">
      <div className="text-belajar">
        <h1 className="hidden-text garis-bawah">
          <span>Bootcamp Pemograman Intensif</span>
        </h1>
        <p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ab dicta illum.
          </span>
          <br />
          <span>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Rerum, dolor!
          </span>
        </p>
      </div>
      <Cards />
    </section>
  );
}
