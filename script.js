let colorMode = "Click";
let color = "Color";
let amount = 0;
const BOARD_WH = 500;
let clickButton = document.querySelector('.click');

let hoverButton = document.querySelector('.hover');
let colorButton = document.querySelector('.color');
let rainbowButton = document.querySelector('.rainbow');
let deleteButton = document.querySelector('.delete');
let clearButton = document.querySelector('.clear');
createBoard(8);


function createBoard(amount)
{
  let html = "";
  let widthAndHeight = BOARD_WH / amount;
  let height = BOARD_WH / amount;
  for(let row = 0; row < amount * amount; row++)
  {

    html += `<div style="width: ${widthAndHeight}px; height: ${height}px;" class="square"></div>`;
  }
  document.querySelector(".board").innerHTML = html;
}

configClickEvents();

function configClickEvents()
{
  let pixels = document.querySelectorAll('.square');
  for(let i = 0; i < pixels.length; i++)
  {
    let pixel = pixels[i];
    pixel.addEventListener('mouseover', () => {
      decideAction(pixel);
     // console.log('hi');

    });
  }
}

function decideAction(pixel)
{
  let selectedColor = document.querySelector('.color').value;
  if(colorMode === "Click")
  {
    pixel.style.backgroundColor = selectedColor;
  }

  if(colorMode == 'Delete')
  {
    pixel.style.backgroundColor = "white";
  }
  
}


// configurate controls
clickButton.addEventListener('click', () => {
  colorMode = "Click";
  clickButton.classList.remove('selected');
  hoverButton.classList.remove('selected');
  clickButton.classList.add('selected');
});

hoverButton.addEventListener('click', () => {
  colorMode = "Hover";
  clickButton.classList.remove('selected');
  hoverButton.classList.remove('selected');
 
  hoverButton.classList.add('selected');
});

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
  color = "Color";
  colorButton.classList.remove('selected');
  rainbowButton.classList.remove('selected');
  deleteButton.classList.remove('selected');
  
  deleteButton.classList.add('selected');
 

})