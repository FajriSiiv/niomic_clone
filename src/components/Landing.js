import React from "react";
import "../style/landing.scss";
import OrgLaptop from "../images/org-laptop.png";
export default function Landing() {
  return (
    <main className="landing">
      <section className="col-1 tmp-text">
        <h1 className="hidden-text garis-bawah">
          <span>Education</span>
        </h1>
        <p className="hidden-text ">
          <span className="">
            Niomic adalah Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ab aut
            blanditiis facilis dolorum facere autem saepe natus amet quia? Adipisci, ut nisi.z
          </span>
        </p>
      </section>
      <section className="col-1 tmp-img">
        <img src={OrgLaptop} alt="Study Code" />
      </section>
    </main>
  );
}
