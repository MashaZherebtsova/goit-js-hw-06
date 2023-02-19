

const bodyColor = document.querySelector("body");
const spanRef = document.querySelector('.color');

const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener("click",getRandomHexColor );



function getRandomHexColor() {
  const randomColor =`#${Math.floor(Math.random() * 16777215).toString(16)}`;
  bodyColor.style.background = randomColor;
  spanRef.textContent = randomColor;
  

}
