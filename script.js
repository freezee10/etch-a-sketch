let amount = 0;

createBoard(5);
function createBoard(amount)
{
  let html = "";
  let widthAndHeight = 600 / amount;
  let height = 600 / amount;
  for(let row = 0; row < amount * amount; row++)
  {

    html += `<div style="width: ${widthAndHeight}px; height: ${height}px;" class="square"></div>`;
  }
  document.querySelector(".board").innerHTML = html;
}