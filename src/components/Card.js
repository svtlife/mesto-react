const Card = ({ card, onCardImage }) => {
  const handleImageClick = () => onCardImage(card);

  return (
    <article className="element">
      <button className="element__delete" type="button" aria-label="delete"></button>
      <img className="element__image" src={card.link} alt={card.name} onClick={handleImageClick} />
      <div className="element__group">
        <h3 className="element__text">{card.name}</h3>
        <div className="element__like-group">
          <button className="element__like" type="button" aria-label="like"></button>
          <span className="element__like-counter">{card.likes}</span>
        </div>
      </div>
    </article>
  );
};

export default Card;
