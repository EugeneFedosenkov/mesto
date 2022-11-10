

let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__job');

// переменная кнопки редактирования
let editButtom = document.querySelector('.profile__edit-buttom');

// переменная кнопки закрытия
let closeButtom = document.querySelector('.form__closeIcon');

// переменная попапа которому будем добавлять класс popup_opened
let popup = document.querySelector('#popup');
//функция открытия popup c добавление значений в value
function popupOpen(){
	popup.classList.add('popup_opened');
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
}
//функция закрытия popup
function popupClose(){
	popup.classList.remove('popup_opened');
}

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

    // Выберите элементы, куда должны быть вставлены значения полей

 name.textContent = nameInput.value;   // Вставьте новые значения с помощью textContent
 job.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
// Закрытие форма на кнопку Сохранить
let submit = document.querySelector('.form__button');
submit.addEventListener('click', popupClose);

// Функция лайка
let like = document.querySelector('.element__like');

function likeUp(){
	like.classList.toggle('element__like_active');
}

like.addEventListener('click', likeUp);