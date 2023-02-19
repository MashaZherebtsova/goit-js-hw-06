let counterValue = 0;
const btnDecrement = document.querySelector('[data-action="decrement"]');
// console.log(btnDecrement);
const btnIncrement = document.querySelector('[data-action="increment"]');
// console.log(btnIncrement);
const counter = document.querySelector('#value');
btnDecrement.addEventListener('click', onDecrementClick);
btnIncrement.addEventListener('click', onIncrementClick);
function onDecrementClick() {
    counterValue -= 1;
    counter.textContent = counterValue;
};
function onIncrementClick() {
    counterValue += 1;
    counter.textContent = counterValue;
};