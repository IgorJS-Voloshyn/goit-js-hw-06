const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const liEl = ingredients.map((elem) => {
  const li = document.createElement("li");
  li.textContent = elem;
  li.classList.add('item');
  const ulEl = document.querySelector('#ingredients');

  return ulEl.append(li);
})