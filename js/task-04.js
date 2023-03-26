const counterValue = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

let sum = 0;

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);

const decrement = () => {
    sum -= 1;
    return counterValue.textContent = sum;

}
const increment = () => {
    sum += 1;
    return counterValue.textContent = sum;

}





