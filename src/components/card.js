import "../style/cards.scss";
const Card = ({ Imgs, title, desc }) => {
  return (
    <section className="card">
      <div className="tmp-img">
        <Imgs />
      </div>
      <div className="tmp-text">
        <h3>{title}</h3>
        <p>{desc}</p>
        <button onClick={e => alert("hello", e)}>Selengkapnya...</button>
      </div>
    </section>
  );
};

export default Card;
