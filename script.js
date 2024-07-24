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
    elem.addEventListener("mouseenter", () => {
        elem.style.backgroundColor = randomRgbStyle();
    })
})

let gridChangerBtn = document.querySelector(".grid-changer");
function gridChanger() {
    let sqrPrSide = prompt("How many squares per side do you want for the new grid? (100 max)", "");
    let numSqrPrSide = Number(sqrPrSide);
    container.innerHTML = "";
    gridUnits = numSqrPrSide;
    divNum = Math.pow(gridUnits, 2);
    gridCreator(divNum); /* grid units */
    let gridDivs = document.querySelectorAll(".new-div");
    gridDivs.forEach(elem => { /* how can I delegate this? */
    elem.addEventListener("mouseenter", () => {
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
// TODO: refactor