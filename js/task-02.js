const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulRef = document.createElement("ul");
const liListRef=ingredients.map (name => {
  const liRef = document.createElement("li");
  liRef.textContent = name;
  liRef.classList.add("item");
  return liRef;
})

ulRef.append(...liListRef);
console.log (ulRef);
document.body.append(ulRef);