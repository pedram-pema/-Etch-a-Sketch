let gridUnits = 15;
let divNum = Math.pow(gridUnits, 2);

let container = document.querySelector(".container");
function gridCreator(divNum) {

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

window.addEventListener('load', () => {
    gridCreator(divNum);
});