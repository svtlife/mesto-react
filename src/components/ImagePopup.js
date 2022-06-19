const ImagePopup = ({ onClose, card }) => {
  return (
    <div className={`popup popup_zoom ${card.isOpen && "popup_opened"}`}>
      <div className="popup__zoom-container">
        <figure className="popup__group">
          <img className="popup__image" src={card.link} alt={card.name} />
          <figcaption className="popup__signature">{card.name}</figcaption>
        </figure>
        <button onClick={onClose} className="popup__close" type="button"></button>
      </div>
    </div>
  );
};

export default ImagePopup;
