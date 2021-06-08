/* Напиши скрипт, который бы при потере фокуса на инпуте,
проверял его содержимое на правильное количество символов.

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым,
если неправильное - красным.

Для добавления стилей, используй CSS-классы valid и invalid. */

const inputEl = document.querySelector('#validation-input')
const validLength = inputEl.dataset.length

inputEl.addEventListener("blur", e => {
   const value = e.currentTarget.value
   if (value.length < validLength) {
      e.currentTarget.classList.add('invalid')
   } else if (value.length >= validLength) {  
      if (e.currentTarget.classList.contains('invalid')) {  
         e.currentTarget.classList.remove('invalid')
         e.currentTarget.classList.add('valid')
      } else e.currentTarget.classList.add('valid')
      }
   }
);
