// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulEl = document.querySelector('ul');

const makeIngredientsList = ingredients => {
  return ingredients.map(text => {
    const liEl = document.createElement('li');
    liEl.textContent = text;
    return liEl;
  })
};

const ingredientsList = makeIngredientsList(ingredients);
ulEl.append(...ingredientsList);