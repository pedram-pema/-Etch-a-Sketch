let gridUnits = 16;
let divNum = Math.pow(gridUnits, 2);

/* take gridUnits and divNum into gridCreator
take flex 1 from styles to js */

function randomRgbStyle() {
    
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

let container = document.querySelector(".container");
function gridCreator(divNum) { /* Dynamic grid creator */

    let i = 0;
    do {
        let newDiv = document.createElement('div');
        newDiv.className = "new-div";
        container.appendChild(newDiv);
        newDiv.style.flexBasis = `calc(100% / ${gridUnits})`;
        i++;
    }
    while (i < divNum);

}
gridCreator(divNum);

let gridDivs = document.querySelectorAll(".new-div");
// Wrap below inside a function:
gridDivs.forEach(elem => {
    let opacity = 0;
    function opaciter() {
        opacity += 0.1;
        return opacity.toString();
    } /* why it doesn't work if these are outside */

    elem.addEventListener("mouseenter", () => {
        
        elem.style.opacity = opaciter();
        elem.style.backgroundColor = randomRgbStyle();
    })
})

let gridChangerBtn = document.querySelector(".grid-changer");
function gridChanger() {
    let sqrPrSide = prompt("How many squares per side do you want for the new grid?", "");
    if (sqrPrSide > 100) {
        alert("Grid can't have more than 100 squares per side, Enter smaller value");
        gridChanger();
    } else if (sqrPrSide == null) {
        return;
    } else if (sqrPrSide == "") {
        return;
    }
    let numSqrPrSide = Number(sqrPrSide);
    container.innerHTML = "";
    gridUnits = numSqrPrSide;
    divNum = Math.pow(gridUnits, 2);
    gridCreator(divNum); /* grid units */
    let gridDivs = document.querySelectorAll(".new-div");
    gridDivs.forEach(elem => {
    let opacity = 0;
    function opaciter() {
        opacity += 0.1;
        return opacity.toString();
    }
    elem.addEventListener("mouseenter", () => {
        elem.style.opacity = opaciter();
        elem.style.backgroundColor = randomRgbStyle();
    })
})
}

gridChangerBtn.addEventListener('click', gridChanger);

let resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => {
    container.innerHTML = "";
    gridUnits = 16;
    divNum = Math.pow(gridUnits, 2);
    gridCreator(divNum);
    let gridDivs = document.querySelectorAll(".new-div");
    gridDivs.forEach(elem => {
        let opacity = 0;
        function opaciter() {
            opacity += 0.1;
            return opacity.toString();
        } /* why it doesn't work if these are outside */
    
        elem.addEventListener("mouseenter", () => {
            
            elem.style.opacity = opaciter();
            elem.style.backgroundColor = randomRgbStyle();
        })
    })
});

// TODO: Add current dimensions to top of grid
// TODO: Change buttons layout: layout and button's width
// TODO: color changer enable/disable button
// TODO: make mouse interact with squares by holding click
// TODO: change color on the grid without erasing
// TODO: fix flex-basis calculation
// TODO: refactor
// FIX: above 100 then 12
// TODO: change mouse hold to toggle
// TODO: Add eraser button
// TODO: Add a color palette