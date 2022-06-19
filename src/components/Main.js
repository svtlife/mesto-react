import { useEffect, useState } from "react";
import api from "../utils/api";
import Card from "./Card";

const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onCardImage }) => {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([user, initialCards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(initialCards);
      })
      .catch((err) => console.error(`Что-то пошло не так: (${err})`));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-btn" type="button" aria-label="Редактировать" onClick={onEditAvatar}>
          <img src={userAvatar} className="profile__avatar" alt="фото аватара" />
        </button>
        <div className="profile__info">
          <h1 className="profile__info-title">{userName}</h1>
          <button className="profile__button" type="button" aria-label="change" onClick={onEditProfile}></button>
          <p className="profile__info-subtitle">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="add" onClick={onAddPlace}></button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card card={card} key={card._id} onCardImage={onCardImage} />
        ))}
      </section>
    </main>
  );
};

export default Main;
