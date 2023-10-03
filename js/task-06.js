const inputSymbols = document.querySelector('#validation-input');

inputSymbols.addEventListener('blur', unFocus);
function unFocus(event){
    const dataLength = Number(inputSymbols.dataset.length);
console.log(dataLength)
const numberOfSymbols = inputSymbols.value.length;
console.log(numberOfSymbols)
    if(numberOfSymbols === dataLength){
        inputSymbols.classList.add('valid');
        inputSymbols.classList.remove('invalid');
    } else {
            // inputSymbols.classList.remove('valid');
            inputSymbols.classList.add('invalid');
    }
}