import React from "react";
import "../style/landing.scss";
import OrgLaptop from "../images/org-laptop.png";
import { useEffect } from "react";
import { TweenMax } from "gsap/all";
import { Expo } from "gsap/all";

export default function Landing() {
  useEffect(() => {
    TweenMax.from(".hidden-text", 1, {
      delay: 1,
      y: "200%",
      ease: Expo.easeInOut
    });
  }, []);

  return (
    <main className="landing">
      <section className="col-1 tmp-text">
        <h1 className="hidden-text garis-bawah">
          <span className="muncul">Education</span>
        </h1>
        <p className="hidden-text ">
          <span className="muncul">
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
