// targetting button element
let btnEle = document.getElementById("button");
// targetting canvas element
let canvasEle = document.getElementById("canvas");
// 16 digit alpha numeric string
const alphaNumeric = "0123456789ABCDEF";

// method to change background color
function changeBackGroundColor() {
    let hexCode = '#' // add pound to concatenate alphanumeric value
    for (let i = 0; i < 6; i++) {
        hexCode = hexCode + alphaNumeric[Math.floor(Math.random() * 16)]
    }
    canvasEle.style.backgroundColor = hexCode;  
}

// listening button click event
btnEle.addEventListener("click", changeBackGroundColor);

