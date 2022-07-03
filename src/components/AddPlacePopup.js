import { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleLinkChange = (e) => setLink(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace({ name, link });
  };

  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Создать"
    >
      <input
        value={name ?? ""}
        onChange={handleNameChange}
        id="place-name"
        className="popup__input popup__input_type_title"
        type="text"
        name="name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="popup__error place-name-error"></span>
      <input
        value={link ?? ""}
        onChange={handleLinkChange}
        id="image-link"
        className="popup__input popup__input_type_link"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__error image-link-error"></span>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
