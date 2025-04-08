let mode = "Click";
let amount = 0;
const BOARD_WH = 500;
let clickButton = document.querySelector('.click');
let deleteButton = document.querySelector('.delete');
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
  if(mode === "Click")
  {
    pixel.style.backgroundColor = selectedColor;
  }

  if(mode == 'Delete')
  {
    pixel.style.backgroundColor = "white";
  }
  
}



clickButton.addEventListener('click', () => {
  mode = "Click";
  document.querySelector('.click').classList.remove('selected');
  document.querySelector('.delete').classList.remove('selected');
  clickButton.classList.add('selected');
});

deleteButton.addEventListener('click', () => {
  mode = "Delete";
  document.querySelector('.click').classList.remove('selected');
  document.querySelector('.delete').classList.remove('selected');
 
  deleteButton.classList.add('selected');
});