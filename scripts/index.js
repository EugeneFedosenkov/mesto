const editProfileBtn = document.querySelector('.profile__edit-buttom')
const popupProfileEdit = document.querySelector('.popup_edit')
export const popupProfileAdd = document.querySelector('.popup_add')
export const popupLargeImg = document.querySelector('.popup_largeimg')
const popupEditCloseBtn = popupProfileEdit.querySelector('.popup__close-icon')
const popupAddCloseBtn = popupProfileAdd.querySelector('.popup__close-icon')
const popupLargeImgCloseBtn = popupLargeImg.querySelector('.popup__close-icon')
const popupEditElementForm = document.querySelector('.form_edit')
export const popupAddCardForm = document.querySelector('.form_add')
const nameProfile = document.querySelector('.profile__name')
const jobProfile = document.querySelector('.profile__job')
const popupEditInputNameForm = popupEditElementForm.querySelector('.form__item_el_name')
const popupEditInputJobForm = popupEditElementForm.querySelector('.form__item_el_about')
const addProfileBtn = document.querySelector('.profile__add-buttom')
export const popupAddInputTitleForm = document.querySelector('.form__item_el_title')
export const popupAddinputUrlForm = document.querySelector('.form__item_el_url')
const popupLargeImage = popupLargeImg.querySelector('.popup__image')
const popupLargeTitle = popupLargeImg.querySelector('.popup__title')
const elementsCardContainer = document.querySelector('.elements__list')

import { validationSettings, initialCards } from "./constants.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

//функция открытия popup c добавление значений в value
const closePopupOverlay = (event) => {
  const isOverlay = event.target.classList.contains('popup_opened');
  if (isOverlay) {
    closePopup(event.currentTarget);
  }
};

const closePopupEsc = (event) => {
  const isEsc = (event.key === 'Escape');
  if (isEsc) {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
};

export const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  popup.addEventListener('mousedown', closePopupOverlay);
  document.addEventListener('keydown', closePopupEsc);
};

// функция закрытия двух попапов
export const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('mousedown', closePopupOverlay);
  document.removeEventListener('keydown', closePopupEsc);
}

const openPopupLargeImage = (name, link) => {
  popupLargeImage.src = link;
  popupLargeTitle.textContent = name;
  popupLargeImage.alt = name;
  openPopup(popupLargeImg)
};

function submitEditProfileForm(evt) {
  evt.preventDefault()
  nameProfile.textContent = popupEditInputNameForm.value // Вставьте новые значения с помощью textContent
  jobProfile.textContent = popupEditInputJobForm.value
  closePopup(popupProfileEdit)
}


editProfileBtn.addEventListener('click', () => {
  openPopup(popupProfileEdit)
  popupEditInputNameForm.value = nameProfile.textContent;
  popupEditInputJobForm.value = jobProfile.textContent;
});

//Добавление карточки
const renderInitialCards = (dataCard, templateSelector, openPopupLargeImage) => {
  const card = new Card(dataCard, templateSelector, openPopupLargeImage);
  elementsCardContainer.prepend(card.generateCard());
}

initialCards.forEach((dataCard) => {
  renderInitialCards(dataCard, '#elements-card', openPopupLargeImage);
});

//Обработчик событий
const submitAddCardForm = (event) => {
  event.preventDefault()
  renderInitialCards({ name: popupAddInputTitleForm.value, link: popupAddinputUrlForm.value }, '#elements-card', openPopupLargeImage)
  popupAddCardForm.reset();
  closePopup(popupProfileAdd)
};

popupAddCardForm.addEventListener('submit', submitAddCardForm);
addProfileBtn.addEventListener('click', () => { openPopup(popupProfileAdd) });
popupEditElementForm.addEventListener('submit', submitEditProfileForm);
editProfileBtn.addEventListener('click', () => { openPopup(popupProfileEdit) });

popupAddCloseBtn.addEventListener('click', () => { closePopup(popupProfileAdd) });
popupEditCloseBtn.addEventListener('click', () => { closePopup(popupProfileEdit) });
popupLargeImgCloseBtn.addEventListener('click', () => { closePopup(popupLargeImg) });

const validationFormAddCard = new FormValidator(validationSettings, popupAddCardForm);
validationFormAddCard.enableValidation();

const validationFormEditProfile = new FormValidator(validationSettings, popupEditElementForm);
validationFormEditProfile.enableValidation();









