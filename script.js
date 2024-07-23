let gridUnits = 16;
let divNum = Math.pow(gridUnits, 2);

let container = document.querySelector(".container");
function gridCreator(divNum) {

    let i = 0;
    do {
        let newDiv = document.createElement('div');
        newDiv.className = "new-div";
        container.appendChild(newDiv);
        newDiv.style.flexBasis = `calc(100% / ${gridUnits})`; /* maybe not use calc and do the math in script? */
        i++;
    }
    while (i < divNum);

}

gridCreator(divNum);