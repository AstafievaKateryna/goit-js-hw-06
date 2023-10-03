const inputElement = document.querySelector('#name-input')
const outputElement = document.querySelector('#name-output')

inputElement.addEventListener('input', function () {
    const trimValue = inputElement.value.trim()
    if (trimValue === "") 
        outputElement.textContent = "Anonymous";
    else
        outputElement.textContent = trimValue;
})