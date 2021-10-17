import React from "react";
import "../style/testi.scss";
import hpTesti from "../images/hp-testi.png";
export default function Testi() {
  return (
    <section className="testi">
      <div className="img col-1">
        <img src={hpTesti} alt="Testimonial Niomic" />
      </div>
      <div className="text col-1">
        <h2 className="">
          <span className="garis-bawah">Testimoni</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sit debitis fugit
          blanditiis, quis possimus, enim nisi excepturi ipsam in voluptatem, nostrum doloribus.
          Laudantium, asperiores.
        </p>
        <button className="btn">Lihat Testimoni</button>
      </div>
    </section>
  );
}
