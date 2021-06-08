/* Счетчик состоит из спана и кнопок,
   которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика.
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса. */

let value = 0;

const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

// function decrement() {
//   valueEl.textContent = value -= 1
// };

// function increment() {
//   valueEl.textContent = value += 1
// };

decrementBtnEl.addEventListener('click', () => valueEl.textContent = --value);
incrementBtnEl.addEventListener('click', () => valueEl.textContent = ++value);
