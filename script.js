let color = "Color";
let amount = 0;
let board = document.querySelector(".board");
const BOARD_WH = 500;
let clickButton = document.querySelector('.click');
let hoverButton = document.querySelector('.hover');
let colorButton = document.querySelector('.color');
let rainbowButton = document.querySelector('.rainbow');
let deleteButton = document.querySelector('.delete');
let clearButton = document.querySelector('.clear');
let resizeButton = document.querySelector('.resize');
createBoard(10);


function createBoard(amount)
{
  let html = "";
  let widthAndHeight = BOARD_WH / amount;
  let height = BOARD_WH / amount;
  for(let row = 0; row < amount * amount; row++)
  {

    html += `<div style="width: ${widthAndHeight}px; height: ${height}px;" class="square"></div>`;
  }
  board.innerHTML = html;
}

configClickEvents();

function configClickEvents()
{
  let pixels = document.querySelectorAll('.square');

  for(let i = 0; i < pixels.length; i++)
  {
    let pixel = pixels[i];
   

        pixel.addEventListener("mousedown", handleEvent);
  pixel.addEventListener("mouseover", event => {
    if (event.buttons == 1) handleEvent(event);
  });
      
     
    
    
   
 
  
  }
}

function handleEvent(e) {
  
  decideAction(e.target);
}



function removeEventListeners()
{
  let pixels = document.querySelectorAll('.square');
  for(let i = 0; i < pixels.length; i++)
  {
    let pixel = pixels[i];
   
    pixel.removeEventListener('click', handleEvent);
     
    pixel.removeEventListener('mouseover', handleEvent);
      
  
  }
}
function decideAction(pixel)
{


  if(color === "Color")
  {

    let selectedColor = document.querySelector('.color-selector').value;
    pixel.style.backgroundColor = selectedColor;

  }

  if(color === 'Delete')
  {
    pixel.style.backgroundColor = "white";
  }

  if(color === "Rainbow")
  {
    let randomColor = "#" + Math.floor(Math.random() * 1677215).toString(16);
    pixel.style.backgroundColor = randomColor;
  }
  
}







colorButton.addEventListener('click', () => {
  color = "Color";
  colorButton.classList.remove('selected');
  rainbowButton.classList.remove('selected');
  deleteButton.classList.remove('selected');
  
  colorButton.classList.add('selected');
 

})

rainbowButton.addEventListener('click', () => {
  color = "Rainbow";
  colorButton.classList.remove('selected');
  rainbowButton.classList.remove('selected');
  deleteButton.classList.remove('selected');
  
  rainbowButton.classList.add('selected');
 

})

deleteButton.addEventListener('click', () => {
  color = "Delete";
  colorButton.classList.remove('selected');
  rainbowButton.classList.remove('selected');
  deleteButton.classList.remove('selected');
  
  deleteButton.classList.add('selected');
 

})

resizeButton.addEventListener('click', () => {
  resize();
})

clearButton.addEventListener('click', clearBoard);

function clearBoard()
{
  let pixels = document.querySelectorAll('.square');
  for(let i = 0; i < pixels.length; i++)
  {
    pixels[i].style.backgroundColor = "white";
  }
}

function resize()
{
  let number = +prompt("Number: ");
  if(number > 100)
  {
    alert("Too large! Max 100")
    return;
  }

  board.innerHTML = "";
  color = "Color";
  colorButton.classList.remove('selected');
  rainbowButton.classList.remove('selected');
  deleteButton.classList.remove('selected');
  
  colorButton.classList.add('selected');

  createBoard(number);
  configClickEvents();
}