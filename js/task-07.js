const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
fontSizeControl.value = parseInt(getComputedStyle(text).fontSize)

fontSizeControl.addEventListener('input', scrollButton);
function scrollButton(e){  
  
      text.style.fontSize = e.currentTarget.value + 'px';

};