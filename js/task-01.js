const listItem = document.querySelectorAll(".item");


console.log(`Number of categories: ${listItem.length}`);

listItem.forEach((item) => {
  console.log(`Category: ${item.children[0].textContent}`);
  console.log(`Element: ${item.lastElementChild.children.length}`);
});