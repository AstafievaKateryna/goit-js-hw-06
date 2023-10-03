function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  
  }
  const color = document.querySelector('.color');
  const body = document.querySelector('body');
  const changeColorBtn = document.querySelector('.change-color');
  
  changeColorBtn.addEventListener('click', clickBtn);
  function clickBtn(){
    color.textContent = getRandomHexColor();
    body.style.backgroundColor = color.textContent;
  }