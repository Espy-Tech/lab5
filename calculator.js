/*jslint browser */

function showResult(text, isError) {
    "use strict";
    const result = document.getElementById("result");
    result.textContent = text;
    result.className = (isError
        ? "error"
        : "");
}

function calculate(event) {
    "use strict";
    event.preventDefault();

    const quantityField = document.getElementById("quantity");
    const productSelect = document.getElementById("product");
    const value = quantityField.value.trim();

    // Проверка ввода регулярным выражением: только цифры
    if (!(/^\d+$/).test(value)) {
        showResult(
            "Ошибка: введите целое неотрицательное число " +
            "(допустимы только цифры).",
            true
        );
        return;
    }

    const quantity = parseInt(value, 10);
    const price = parseInt(productSelect.value, 10);

    if (quantity === 0) {
        showResult("Ошибка: количество должно быть больше нуля.", true);
        return;
    }

    showResult("Стоимость заказа: " + (price * quantity) + " ₽", false);
}

document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    const form = document.getElementById("calc-form");
    form.addEventListener("submit", calculate);
});
