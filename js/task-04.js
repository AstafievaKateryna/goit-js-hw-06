let counterValue = 0;
const curentValue = document.querySelector('#value');

const clickMinus = document.querySelector('button[data-action="decrement"]');

const clickPlus = document.querySelector('button[data-action="increment"]');

clickMinus.addEventListener('click', pushMinus);
function pushMinus(event){
    counterValue -= 1;
    curentValue.textContent = counterValue;
};
clickPlus.addEventListener('click', pushPlus);
function pushPlus(event){
    counterValue += 1;
    curentValue.textContent = counterValue;
};
