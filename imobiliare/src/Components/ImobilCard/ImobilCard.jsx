import "./imobil-card.css";

export const ImobilCard = ({ imobil }) => {
  return (
    <div>
      <p className="p-title">{imobil.title}</p>
      <p>{imobil.description}</p>
      <p>{imobil.price}</p>
      <br />
    </div>
  );
};
