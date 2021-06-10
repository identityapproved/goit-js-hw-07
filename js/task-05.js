/* Напиши скрипт,
который при наборе текста в инпуте input#name - input(событие input),
подставляет его текущее значение в span#name - output.
Если инпут пустой, в спане должна отображаться строка 'незнакомец'. */

const inputNameEl = document.querySelector('#name-input')
const nameOutEl = document.querySelector('#name-output')

const enterName = function (input) {
   const value = input.currentTarget.value.trim()

   if (value !== '') {
      return nameOutEl.textContent = value
   }
   return nameOutEl.textContent = 'незнакомец'
}

inputNameEl.addEventListener('input', enterName)