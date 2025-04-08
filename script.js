let amount = 0;
const BOARD_WH = 500;
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
  document.querySelector(".board").innerHTML = html;
}