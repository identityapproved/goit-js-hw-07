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

const categoryItemsEl = document.querySelector('#categories')
console.log(`В списке ${categoryItemsEl.children.length} категории.`)

const liItemEl = document.querySelectorAll('.item')
liItemEl.forEach((e) => {
   const categoryName = e.querySelector('h2').textContent
   const itemsLength = e.querySelectorAll('li').length
   console.log(`Категория: ${categoryName}\nКоличество элементов: ${itemsLength}`)
})