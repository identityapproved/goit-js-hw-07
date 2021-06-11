/* Напиши скрипт создания и очистки коллекции элементов.
Пользователь вводит количество элементов в input и нажимает кнопку Создать,
после чего рендерится коллекция.При нажатии на кнопку Очистить,
коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

   Имеет случайный rgb цвет фона
   Размеры самого первого div - 30px на 30px
   Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
   
Создай функцию destroyBoxes(), которая очищает div#boxes. */

const inputEl = document.querySelector('#controls input')
const renderBtn = document.querySelector('[data-action="render"]')
const destrBtn = document.querySelector('[data-action="destroy"]')
const boxContainer = document.querySelector('#boxes')
boxContainer.style.display = 'flex'
boxContainer.style.flexWrap = 'wrap'

const createBoxes = () => {
   const arrayOfBoxes = []
   let defBoxSize = 30
   const amount = Number(inputEl.value);
   
   for (let index = 0; index < amount; index+=1) {
      const getRandomRGB = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`
      const divItem = document.createElement('div')
      divItem.style.width = `${defBoxSize + index * 10}px`
      divItem.style.height = `${defBoxSize + index * 10}px`
      divItem.style.backgroundColor = `${getRandomRGB}`
      arrayOfBoxes.push(divItem)
   }
   return boxContainer.append(...arrayOfBoxes)
}

const destroyBoxes = () => {
   boxContainer.innerHTML = ''
}

renderBtn.addEventListener('click', createBoxes)
destrBtn.addEventListener('click', destroyBoxes)