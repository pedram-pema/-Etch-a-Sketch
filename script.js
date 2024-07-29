let container = document.querySelector(".container");
function gridCreator(gridUnits = 16) { /* Dynamic grid creator */

    let divNum = Math.pow(gridUnits, 2);

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
gridCreator();

function randomRgbStyle() {
    
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

let gridDivs = document.querySelectorAll(".new-div");
// Wrap below inside a function:
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

let gridChangerBtn = document.querySelector(".grid-changer");
function gridChanger() {
    let sqrPrSide = Number(prompt("How many squares per side do you want for the new grid?", ""));
    if (sqrPrSide > 100) {
        alert("Grid can't have more than 100 squares per side, Enter smaller value");
        gridChanger();
        return;
    } else if (sqrPrSide == null || sqrPrSide == "") {
        return;
    }
    container.innerHTML = "";
    gridCreator(sqrPrSide);
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
    gridCreator();
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
});

// TODO: Add current dimensions to top of grid
// TODO: Change buttons layout: layout and button's width
// TODO: color changer enable/disable button
// TODO: make mouse interact with squares by holding click
// TODO: change color on the grid without erasing
// TODO: refactor
// TODO: change mouse hold to toggle
// TODO: Add eraser button
// TODO: Add a color palette
// TODO: Add (y) x (z) and total and amount of colored