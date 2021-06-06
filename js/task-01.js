// Напиши скрипт, который выполнит следующие операции.

//    Посчитает и выведет в консоль количество категорий в ul#categories,
//    то есть элементов li.item.Получится 'В списке 3 категории.'.

//    Для каждого элемента li.item в списке ul#categories,
//    найдет и выведет в консоль текст заголовка элемента(тега h2)
//    и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

// **************************************************************

const ulEl = document.querySelector('#categories');
console.log(`В списке ${ulEl.children.length} категории.`)

const ulItemsEl = document.querySelectorAll('.item > h2');
const iterTitle = ulItemsEl.forEach.call(ulItemsEl, function(h2) {
   console.log('Категория: ', h2.textContent)
});

const itemsEl = document.querySelectorAll('.item > ul');
const iterLi = itemsEl.forEach.call(itemsEl, function (ul) {
   console.log('Количество элементов: ', ul.children.length)
}) 

console.log('Категория: ')
console.log('Количество элементов: ')
