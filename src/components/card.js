import "../style/cards.scss";
import React, { useState } from "react";

const Card = ({ Imgs, title, desc, moreText }) => {
  const [textMore, setTextmore] = useState("moreText");
  const handleClick = () => {
    if (textMore === "moreText") {
      setTextmore("moreTextActive");
      console.log(textMore);
    } else {
      setTextmore("moreText");
      console.log(textMore);
    }
  };

  return (
    <section className="card">
      <div className="tmp-img">
        <Imgs />
      </div>
      <div className="tmp-text">
        <h3>{title}</h3>
        <p>
          {desc} <span className={"moreText" + " " + textMore}>{moreText}</span>
        </p>
        <button onClick={handleClick}>{textMore === "moreText" ? "Read more" : "Read less"}</button>
      </div>
    </section>
  );
};

export default Card;
