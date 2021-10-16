import { FiFigma } from "react-icons/fi";
import Card from "./card";
import "../style/cards.scss";
const Cards = () => {
  const data = [
    {
      id: 1,
      title: "Sistem Belajar",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum placeat, illo consequatur, nostrum nulla labore quaerat nemo ab voluptas rem quae.",
      images: FiFigma
    },
    {
      id: 2,
      title: "Sistem Belajar 2",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum placeat, illo consequatur, nostrum nulla labore quaerat nemo ab voluptas rem quae.",
      images: FiFigma
    },
    {
      id: 3,
      title: "Sistem Belajar 3",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum placeat, illo consequatur, nostrum nulla labore quaerat nemo ab voluptas rem quae.",
      images: FiFigma
    }
  ];

  return (
    <div className="cards">
      {data.map(card => (
        <Card key={card.id} Imgs={card.images} title={card.title} desc={card.desc} />
      ))}
    </div>
  );
};

export default Cards;
