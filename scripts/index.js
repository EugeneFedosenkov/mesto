const name = document.querySelector('.profile__name')
const job = document.querySelector('.profile__job')
const editButtom = document.querySelector('.profile__edit-buttom')
const addButtom = document.querySelector('.profile__add-buttom')
const popupLarge = document.querySelector('.popup_largeimg')
const popupEdit = document.querySelector('.popup_edit')
const popupAdd = document.querySelector('.popup_add')
const closePopupEditBtn = popupEdit.querySelector('.popup__close-icon')
const closePopupAddBtn = popupAdd.querySelector('.popup__close-icon')
const closePopupLargeBtn = popupLarge.querySelector('.popup__close-icon')
const popupLargeImage = popupLarge.querySelector('.popup__image')
const popupLargeTitle = popupLarge.querySelector('.popup__title')
//DOM Узлы
const elementsContainer = document.querySelector('.elements__list')
const formCard = document.querySelector('.form_add')
const inputTitle = document.querySelector('.form__item_el_title')
const inputUrl = document.querySelector('.form__item_el_url')
//функция открытия popupEdit c добавление значений в value
//function popupEditOpen() {
// popupEdit.classList.add('popup_opened')
//  nameInput.value = name.textContent
//  jobInput.value = job.textContent
//}
//функция открытия popupAdd
function popupOpen(popup) {
  popup.classList.add('popup_opened')
}
// открытие попапов
editButtom.addEventListener('click', () => {
  popupOpen(popupEdit)
})
addButtom.addEventListener('click', () => {
  popupOpen(popupAdd)
})
// функция закрытия двух попапов
function popupClose(popup) {
  popup.classList.remove('popup_opened')
  popupLargeImage.src = '';
}
// закрытие попапов
closePopupEditBtn.addEventListener('click', () => popupClose(popupEdit))
closePopupAddBtn.addEventListener('click', () => popupClose(popupAdd))
closePopupLargeBtn.addEventListener('click', () => popupClose(popupLarge))

// Находим форму в DOM
const formElement = document.querySelector('.form_edit') // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = formElement.querySelector('.form__item_el_name') // Воспользуйтесь инструментом .querySelector()
const jobInput = formElement.querySelector('.form__item_el_about') // Воспользуйтесь инструментом .querySelector()
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault()
  name.textContent = nameInput.value // Вставьте новые значения с помощью textContent
  job.textContent = jobInput.value
  popupClose(popupEdit)
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler)

const initialCards = [
  {
    name: 'Архыз',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
]


//Шаблоны
const cardTemplate = document
  .querySelector('#elements-card')
  .content.querySelector('.element')

//Генерация карточки

//(функция удаление карточек)
const handleDeleteCard = (event) => {
  event.target.closest('.element').remove()
}

//(функция лайка карточек)
const handleLikeCard = (event) => {
  event.target
    .closest('.element__like')
    .classList.toggle('element__like_active')
}

const generateCard = (dataCard) => {
  const newCard = cardTemplate.cloneNode(true)
  const title = newCard.querySelector('.element__title')
  const image = newCard.querySelector('.element__mask')
  title.textContent = dataCard.name
  image.src = dataCard.link
  image.alt = dataCard.name
  //( слушатель удаление карточек)
  const deleteBtn = newCard.querySelector('.element__trash')
  deleteBtn.addEventListener('click', handleDeleteCard)
  //( слушатель лайка карточек)
  const likeBtn = newCard.querySelector('.element__like')
  likeBtn.addEventListener('click', handleLikeCard)

  const openLargeImage = () => {
    popupOpen(popupLarge)
    popupLargeImage.src = image.src
    popupLargeTitle.textContent = dataCard.name
    popupLargeImage.alt = dataCard.name
  }
  image.addEventListener('click', openLargeImage)

  return newCard
}
//Обработчик событий
const handlerSubmitAddCardForm = (event) => {
  event.preventDefault()
  renderCard({ name: inputTitle.value, link: inputUrl.value })
  popupClose(popupAdd)
  inputTitle.value = ''
  inputUrl.value = ''
}
//Добавление карточки
const renderCard = (dataCard) => {
  elementsContainer.prepend(generateCard(dataCard))
}
//Рендер всех карточек
formCard.addEventListener('submit', handlerSubmitAddCardForm)

initialCards.forEach((dataCard) => {
  renderCard(dataCard)
})