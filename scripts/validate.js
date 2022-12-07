const validationSettings = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__item-error_active'
};

// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage, validSettings) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationSettings.inputErrorClass);

  // Показываем сообщение об ошибке
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationSettings.errorClass);
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, validSettings) => {
  inputElement.classList.remove(validationSettings.inputErrorClass);
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // Скрываем сообщение об ошибке
  errorElement.classList.remove(validationSettings.errorClass);
  // Очистим ошибку
  errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);  
  }
};
//////
const hasInvalidInput = (inputList,) => {
return inputList.some(input => !input.validity.valid)
};

const toggleButtonState = (inputList, buttonElement, validSettings) => {
if (hasInvalidInput(inputList)) {
  buttonElement.setAttribute("disabled", true);
  buttonElement.classList.add(validationSettings.inactiveButtonClass);
} else {
  buttonElement.removeAttribute("disabled", false);
  buttonElement.classList.remove(validationSettings.inactiveButtonClass);
}
};



const setEventListeners = (formElement, validSettings) => {
  const inputList = Array.from(formElement.querySelectorAll(validSettings.inputSelector));
  const buttonElement = formElement.querySelector(validSettings.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
  inputElement.addEventListener('input', function () {
    checkInputValidity(formElement, inputElement);
    toggleButtonState(inputList, buttonElement);
  });
});
};

const enableValidation = (validSettings) => {
  const formList = Array.from(document.querySelectorAll(validSettings.formSelector))
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault(); 
    });

    setEventListeners(formElement, validSettings)
  })
}

  enableValidation(validationSettings);