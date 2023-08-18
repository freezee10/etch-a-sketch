let selectedButton = "Color";

createBoardFromButton(16);

selectionStyles();

function createBoardFromButton(num) {

    
   
   
    createBoard(num);
    calcDimensions(num);
   renderOptions();
      document.querySelector('.board').style.height = "408px";

} 

function calcDimensions (num) {
    let dimen = 400 / num
    let pix = document.getElementsByClassName('pixel');
    for(let i = 0; i < pix.length; i++) {
      pix[i].style.width = `${dimen}px`
      pix[i].style.height = `${dimen}px`
    }
}




function createBoard(num) {
    let colHtml = "";
    for(let i = 1; i <= num; i++) {
        colHtml += `<div class = "column${i}">
        
    </div>`
    }
    document.querySelector('.columns').innerHTML = colHtml
   


for(let i = 1; i <= num; i++) {
    document.querySelector(`.column${i}`).innerHTML = generateRowHTML(num);
} 

}

function generateRowHTML (num) {
let html = "";
    for(let i = 1; i <= num; i++) {
        html += `<div class = "pixel">  </div> `;
    }

    return html;
}

function selectionStyles() {
    document.querySelector('.color-mode-button').addEventListener('click', ()=> {
        selectedButton = "Color";
        removeOtherStyles();
        document.querySelector('.color-mode-button').classList.add('selected');
    })

    document.querySelector('.rainbow-mode-button').addEventListener('click', ()=> {
        selectedButton = "Rainbow";
        removeOtherStyles();
        document.querySelector('.rainbow-mode-button').classList.add('selected');
    })

    document.querySelector('.eraser-mode-button').addEventListener('click', ()=> {
        selectedButton = "Eraser";
        removeOtherStyles();
        document.querySelector('.eraser-mode-button').classList.add('selected');
    })
}

function removeOtherStyles() {
    document.querySelector('.color-mode-button').classList.remove('selected');
    document.querySelector('.rainbow-mode-button').classList.remove('selected');
    document.querySelector('.eraser-mode-button').classList.remove('selected');
    document.querySelector('.clear').classList.remove('selected');
}



document.querySelector('.clear').addEventListener('click', () => {
 
    let pix = document.getElementsByClassName('pixel');
    for(let i = 0; i < pix.length; i++) {
      pix[i].style.backgroundColor = "white";
   
    }
})

document.getElementById('sizeSlider').addEventListener('change', ()=> {
    let num = document.getElementById("sizeSlider").value;
  createBoardFromButton(num);


})

document.getElementById('sizeSlider').addEventListener('input', () => {
    let num = document.getElementById("sizeSlider").value;
    document.querySelector('.size-number').innerHTML = `${num} x ${num}`;

})

function renderOptions() {
    document.querySelectorAll('.pixel').forEach((pixel) => {
        pixel.addEventListener('click', () => {
            if(selectedButton === "Color") {
         
                let color = document.getElementById("colorPicker").value;
                pixel.style.backgroundColor = `${color}`;
            } else if(selectedButton === "Eraser") {
                pixel.style.backgroundColor = "white";
            } else if(selectedButton = "Rainbow") {
                let randomColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
                pixel.style.backgroundColor = `${randomColor}`;
            }
        })
    })
}