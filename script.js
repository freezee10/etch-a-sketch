let selectedButton = "Color";
let mode = "Click";
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

    document.querySelector('.click').addEventListener('click', () => {
        document.querySelector('.hover').classList.remove('selected');
        mode = "Click";
        
document.querySelector('.click').classList.add('selected');
    })

    document.querySelector('.hover').addEventListener('click', () => {
        document.querySelector('.click').classList.remove('selected');
        mode = "Hover";
        renderOptions();
        
        document.querySelector('.hover').classList.add('selected');
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
// ... Your existing code ... figure out how this works

function renderOptions() {
    if (mode === "Click") {
        // Attach click event listener to each pixel
        document.querySelectorAll('.pixel').forEach((pixel) => {
            pixel.addEventListener('click', () => addClick(pixel));
        });

        // Add mouse down event listener to the board container
        document.querySelector('.board').addEventListener('mousedown', handleMouseDown);
        // Add mouse move event listener to the document
        document.addEventListener('mousemove', handleMouseMove);
        // Add mouse up event listener to the document
        document.addEventListener('mouseup', handleMouseUp);
    } else if (mode === "Hover") {
        console.log('hover');
        // Remove mouse down, move, and up event listeners
        document.querySelector('.board').removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);

        // Attach hover event listener to each pixel
        document.querySelectorAll('.pixel').forEach((pixel) => {
            pixel.addEventListener('mouseenter', () => hover(pixel));
        });
    }
}

let isMouseDown = false; // To track whether the mouse button is pressed

// Event listener for mouse down
function handleMouseDown() {
    isMouseDown = true;
}

// Event listener for mouse move while the mouse button is held down
function handleMouseMove(event) {
    if (isMouseDown) {
        const pixel = findPixel(event.target);
        if (pixel) {
            // Call the appropriate function based on the selected button
            if (selectedButton === "Color") {
                let color = document.getElementById("colorPicker").value;
                pixel.style.backgroundColor = `${color}`;
            } else if (selectedButton === "Eraser") {
                pixel.style.backgroundColor = "white";
            } else if (selectedButton === "Rainbow") {
                let randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
                pixel.style.backgroundColor = `${randomColor}`;
            }
        }
    }
}

// Event listener for mouse up
function handleMouseUp() {
    isMouseDown = false;
}

// Helper function to find the closest pixel element
function findPixel(element) {
    while (element && !element.classList.contains('pixel')) {
        element = element.parentElement;
    }
    return element;
}

// ... Rest of your code ...


function hover(pixel) {
    if(selectedButton === "Color") {
         
        let color = document.getElementById("colorPicker").value;
        pixel.style.backgroundColor = `${color}`;
    } else if(selectedButton === "Eraser") {
        pixel.style.backgroundColor = "white";
    } else if(selectedButton = "Rainbow") {
        let randomColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        pixel.style.backgroundColor = `${randomColor}`;
    }
}

function addClick(pixel) {
    if(selectedButton === "Color") {
         
        let color = document.getElementById("colorPicker").value;
        pixel.style.backgroundColor = `${color}`;
    } else if(selectedButton === "Eraser") {
        pixel.style.backgroundColor = "white";
    } else if(selectedButton = "Rainbow") {
        let randomColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        pixel.style.backgroundColor = `${randomColor}`;
    }
}