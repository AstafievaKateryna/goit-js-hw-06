function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  function createBoxes(amount) {
    let size = 30
  
    for (let i = 0; i < amount; i++) {
      const div = document.createElement('div')
      
      div.style.width = `${size}px`
      div.style.height = `${size}px`
      div.style.backgroundColor = getRandomHexColor()
  
      size += 10
      boxesDiv.appendChild(div)
    }
  }
  
  function destroyBoxes() {
  boxesDiv.innerHTML = ''
  }
  const boxesDiv = document.querySelector('#boxes')
  const createBtn = document.querySelector('[data-create]')
  const destroyBtn = document.querySelector('[data-destroy]')
  
  
  createBtn.addEventListener('click', () => {
    const numberInputValue = parseInt(document.querySelector('input[type=number]').value)
    createBoxes(numberInputValue)
  })
  destroyBtn.addEventListener('click', destroyBoxes)