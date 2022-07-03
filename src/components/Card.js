import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = ({ card, onCardImage, onCardLike, onCardDelete }) => {
  const { _id: userId } = useContext(CurrentUserContext);

  const isOwn = card.owner._id === userId;
  const isLiked = card.likes.some((item) => item._id === userId);

  const cardDeleteButtonClassName = `element__delete ${
    isOwn ? "element__deletevisible" : "element__delete_hidden"
  }`;
  const cardLikeButtonClassName = `element__like ${isLiked && "element__like_active"}`;

  const handleImageClick = () => onCardImage(card);
  const handleLikeClick = () => onCardLike(card);
  const handleDeleteClick = () => onCardDelete(card);

  return (
    <article className="element">
      <img onClick={handleImageClick} className="element__image" src={card.link} alt={card.name} />
      <button
        onClick={handleDeleteClick}
        className={cardDeleteButtonClassName}
        type="button"
        aria-label="delete"
      ></button>
      <div className="element__group">
        <h2 className="element__text">{card.name}</h2>
        <div className="element__like-group">
          <button
            onClick={handleLikeClick}
            className={cardLikeButtonClassName}
            type="button"
            aria-label="like"
          ></button>
          <span className="card__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
};

export default Card;
