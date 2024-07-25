let gridUnits = 16;
let divNum = Math.pow(gridUnits, 2);

function randomRgbStyle() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

let container = document.querySelector(".container");
function gridCreator(divNum) {

    let i = 0;
    do {
        let newDiv = document.createElement('div');
        newDiv.className = "new-div";
        container.appendChild(newDiv);
        newDiv.style.flexBasis = `calc(100% / ${gridUnits})`;
        i++;""
    }
    while (i < divNum);

}
gridCreator(divNum);


let gridDivs = document.querySelectorAll(".new-div");
gridDivs.forEach(elem => { /* how can I delegate this? */
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
    gridDivs.forEach(elem => { /* how can I delegate this? */
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

// TODO: prompt cancel should return the default grid
// TODO: handle empty prompt
// TODO: reset button
// TODO: color changer enable/disable button
// TODO: make mouse interact with squares by holding click
// TODO: change color at the same time
// TODO: fix flex-basis calculation
// TODO: refactor