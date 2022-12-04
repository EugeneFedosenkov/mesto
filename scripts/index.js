const nameProfile = document.querySelector('.profile__name')
const jobProfile = document.querySelector('.profile__job')
const editProfileBtn = document.querySelector('.profile__edit-buttom')
const addProfileBtn = document.querySelector('.profile__add-buttom')
const popupLargeImg = document.querySelector('.popup_largeimg')
const popupProfileEdit = document.querySelector('.popup_edit')
const popupProfileAdd = document.querySelector('.popup_add')
const closePopupEditBtn = popupProfileEdit.querySelector('.popup__close-icon')
const closePopupAddBtn = popupProfileAdd.querySelector('.popup__close-icon')
const closePopupLargeBtn = popupLargeImg.querySelector('.popup__close-icon')
const popupLargeImage = popupLargeImg.querySelector('.popup__image')
const popupLargeTitle = popupLargeImg.querySelector('.popup__title')
const elementsCardContainer = document.querySelector('.elements__list')
const popupAddCardForm = document.querySelector('.form_add')
const popupAddInputTitleForm = document.querySelector('.form__item_el_title')
const popupAddinputUrlForm = document.querySelector('.form__item_el_url')
const popupEditElementForm = document.querySelector('.form_edit') 
const popupEditInputNameForm = popupEditElementForm.querySelector('.form__item_el_name')
const popupEditInputJobForm = popupEditElementForm.querySelector('.form__item_el_about')
const templatesCard = document
  .querySelector('#elements-card')
  .content.querySelector('.element')
const popupOpening = document.querySelector('.popup')


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

function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('mousedown', closePopupOverlay);
  document.addEventListener('keydown', closePopupEsc);
}
// функция закрытия двух попапов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('mousedown', closePopupOverlay);
  document.removeEventListener('keydown', closePopupEsc);
  popupAddCardForm.reset();
}


function submitEditProfileForm(evt) {
  evt.preventDefault()
  nameProfile.textContent = popupEditInputNameForm.value // Вставьте новые значения с помощью textContent
  jobProfile.textContent = popupEditInputJobForm.value
  closePopup(popupProfileEdit)
}

const handleTemplatesDeleteCard = (event) => {
  event.target.closest('.element').remove()
}

//(функция лайка карточек)
const handleTemplatesLikeCard = (event) => {
  event.target
    .closest('.element__like')
    .classList.toggle('element__like_active')
}

const generateTemplatesCard = (dataCard) => {
  const newTemplatesCard = templatesCard.cloneNode(true)
  const titleTemplates = newTemplatesCard.querySelector('.element__title')
  const imageTemplates = newTemplatesCard.querySelector('.element__mask')
  titleTemplates.textContent = dataCard.name
  imageTemplates.src = dataCard.link
  imageTemplates.alt = dataCard.name
  //( слушатель удаление карточек)
  const deleteTemplatesBtn = newTemplatesCard.querySelector('.element__trash')
  deleteTemplatesBtn.addEventListener('click', handleTemplatesDeleteCard)
  //( слушатель лайка карточек)
  const likeTemplatesBtn = newTemplatesCard.querySelector('.element__like')
  likeTemplatesBtn.addEventListener('click', handleTemplatesLikeCard)

  const openPopupLargeImage = () => {
    openPopup(popupLargeImg)
    popupLargeImage.src = imageTemplates.src
    popupLargeTitle.textContent = dataCard.name
    popupLargeImage.alt = dataCard.name
  }
  imageTemplates.addEventListener('click', openPopupLargeImage)

  return newTemplatesCard
}

//Обработчик событий
const submitAddCardForm = (event) => {
  event.preventDefault()
  renderInitialCards({ name: popupAddInputTitleForm.value, link: popupAddinputUrlForm.value })
  closePopup(popupProfileAdd)
  popupAddCardForm.reset();
}
//Добавление карточки
const renderInitialCards = (dataCard) => {
  elementsCardContainer.prepend(generateTemplatesCard(dataCard))
}

initialCards.forEach((dataCard) => {
  renderInitialCards(dataCard)
})

//Рендер всех карточек
popupAddCardForm.addEventListener('submit', submitAddCardForm)
// открытие попапов
editProfileBtn.addEventListener('click', () => {
  openPopup(popupProfileEdit)
  popupEditInputNameForm.value = nameProfile.textContent;
  popupEditInputJobForm.value = jobProfile.textContent;
})

addProfileBtn.addEventListener('click', () => openPopup(popupProfileAdd))
// закрытие попапов
closePopupEditBtn.addEventListener('click', () => closePopup(popupProfileEdit))

closePopupAddBtn.addEventListener('click', () => {
  closePopup(popupProfileAdd);
  });


closePopupLargeBtn.addEventListener('click', () => {
  closePopup(popupLargeImg);
  popupLargeImage.src = '';
});

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupEditElementForm.addEventListener('submit', submitEditProfileForm)

  popupLargeImage.src = '';



  validationSettings.inputSelector