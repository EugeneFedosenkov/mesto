// переменная кнопки редактирования
let editButtom = document.querySelector('.profile__info__edit-buttom');

// переменная кнопки закрытия
let closeButtom = document.querySelector('.form__closeIcon');

// переменная попапа которому будем добавлять класс popup_opened
let popup = document.querySelector('#popup');
//функция открытия popup c добавление значений в value
function popupOpen(){
	popup.classList.add('popup_opened');
}
//функция закрытия popup
function popupClose(){
	popup.classList.remove('popup_opened');
}


// функция toggle добавляет  переменной popup класс  popup_opened
//function popupOpen(){
//popup.classList.toggle('popup_opened');
//}
// реакция на действие при клике на editButtom происходит функция  popupOpen
editButtom.addEventListener('click', popupOpen);
closeButtom.addEventListener('click', popupClose);


            // Находим форму в DOM
let formElement = document.querySelector('.form');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.form__item_el_name');// Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector('.form__item_el_about');// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

nameInput.getAttribute('value');   // Получите значение полей jobInput и nameInput из свойства value
jobInput.getAttribute('value');

let title = document.querySelector('.profile__info__title');
let subtitle = document.querySelector('.profile__info__subtitle');
    // Выберите элементы, куда должны быть вставлены значения полей

 title.textContent = nameInput.value;   // Вставьте новые значения с помощью textContent
 subtitle.textContent = jobInput.value;
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
// Закрытие форма на кнопку Сохранить
let submit = document.querySelector('.form__button');
submit.addEventListener('click', popupOpen);


// функция заполняет значения формы
function formEdit(){

let name = document.querySelector('.profile__info__title');
let profession = document.querySelector('.profile__info__subtitle');

nameInput.value = name.textContent;
jobInput.value = profession.textContent;
}

editButtom.addEventListener('click', formEdit);



let like = document.querySelector('.element__container__like');

function likeUp(){
	like.classList.toggle('element__container__like_active');
}

like.addEventListener('click', likeUp);