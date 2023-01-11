class FormValidator {
    constructor(validationSettings, form) {
        this._validationsettings = validationSettings;
        this._form = form;
        this._buttonElement = this._form.querySelector(validationSettings.submitButtonSelector);
        this._inputList = Array.from(this._form.querySelectorAll(this._validationsettings.inputSelector));
    };

    _showInputError(inputElement, errorMessage) {
        this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._validationsettings.inputErrorClass);
        this._errorElement.textContent = errorMessage;
        this._errorElement.classList.add(this._validationsettings.errorClass);
    };

    _hideInputError(inputElement) {
        this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._validationsettings.inputErrorClass);
        this._errorElement.classList.remove(this._validationsettings.errorClass);
        this._errorElement.textContent = '';
    };

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _disableSubmitButton() {
        this._buttonElement.setAttribute("disabled", true);
        this._buttonElement.classList.add(this._validationsettings.inactiveButtonClass);
    };

    _enableSubmitButton() {
        this._buttonElement.removeAttribute("disabled", false);
        this._buttonElement.classList.remove(this._validationsettings.inactiveButtonClass);
    };

    _hasInvalidInput() {
        return this._inputList.some(input => !input.validity.valid);
    };

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._disableSubmitButton();
        } else {
            this._enableSubmitButton();
        }
    };

    _setEventListeners() {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });

            this._form.addEventListener('reset', () => {
                setTimeout(() => {
                    this._toggleButtonState();
                });
            });
        });
    };

    enableValidation = () => {
        this._setEventListeners();
    };
};

export default FormValidator;