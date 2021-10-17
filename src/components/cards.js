import { FiFigma } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiTarget } from "react-icons/fi";

import Card from "./card";
import "../style/cards.scss";
const Cards = () => {
  const data = [
    {
      id: 1,
      title: "Sistem Belajar",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum placeat, illo consequatur, nostrum nulla labore quaerat nemo ab voluptas rem quae.",
      images: FiFigma,
      moreText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, beatae?"
    },
    {
      id: 2,
      title: "Syllabus",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum placeat, illo consequatur, nostrum nulla labore quaerat nemo ab voluptas rem quae.",
      images: FiGithub,
      moreText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, beatae?"
    },
    {
      id: 3,
      title: "Target Pencapaian",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum placeat, illo consequatur, nostrum nulla labore quaerat nemo ab voluptas rem quae.",
      images: FiTarget,
      moreText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, beatae?"
    }
  ];

  return (
    <div className="cards">
      {data.map(card => (
        <Card
          key={card.id}
          Imgs={card.images}
          title={card.title}
          desc={card.desc}
          moreText={card.moreText}
        />
      ))}
    </div>
  );
};

export default Cards;
