const counterValue = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

let sum = 0;

const decrement = () => {
    sum -= 1;
counterValue.textContent = sum;

}
const increment = () => {
    sum += 1;
 counterValue.textContent = sum;

}

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);




