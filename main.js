const container = document.getElementById("container");
let grids = document.getElementsByClassName("grids");
let input;
let rgbs;
let r = 0;
let g = 0;
let b = 0;

function getInput(){
  let input = prompt('Input number between 2 and 100');
  return  Number(input);

}

function checkIfNumber(){
if (Number.isNaN(input) == true) {
  return false;
}else{
  return true;
}
}

function checkIfValidNumber(){
if(input < 2 || input > 100) {
    return false;
  }  return true;
}

function checkIfValidInput(){
  let isNumber = checkIfNumber();
  let isValidNum = checkIfValidNumber();

while (isNumber == false  ) {
  input = getInput();
  isNumber = checkIfNumber(input);
  isValidNum = checkIfValidNumber(input);
}

while (isValidNum == false) {
  input =getInput();
  isValidNum = checkIfValidNumber(input);
}
return input;
}

function pickGridSize(){
  removeGrid();
  input = getInput();
  makeRows();

  
}
function removeGrid(){
  Array.from(grids).forEach(function(item){
    item.remove();
}
)}

 function makeRows() {
     let boxNumber = checkIfValidInput();
   container.style.setProperty('--grid-rows', boxNumber);
   container.style.setProperty('--grid-cols', boxNumber);
   for (c = 0; c < (boxNumber * boxNumber); c++) {
     let cell = document.createElement("div");
    container.appendChild(cell).className= "grids";  
   };
   
 };

 function generateRandomColorRgb() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function setRandomColor(event){
event.target.style.backgroundColor = generateRandomColor();

}

function randomColor(){
  removeEraser();
  removeBlackColor();
Array.from(grids).forEach(function(item){
  item.addEventListener("mouseover",setRandomColor)
}
)}

function removeRandomColor(){
  Array.from(grids).forEach(function(item){
    item.removeEventListener("mouseover",setRandomColor)
}
  )}

function blackColor(){
  removeEraser();
  removeRandomColor();
Array.from(grids).forEach(function(item){
  item.addEventListener("mouseover",setBlackColor)
})  
};

function setBlackColor(event){
  event.target.style.backgroundColor = 'black'
}

function removeBlackColor(){
  Array.from(grids).forEach(function(item){
    item.removeEventListener("mouseover",setBlackColor)
}
  )}

function eraser(){
removeRandomColor();
removeBlackColor();
Array.from(grids).forEach(function(item){
  item.addEventListener("click",setErased)
})  
};

function setErased(event){
event.target.style.backgroundColor = 'white';
}

function removeEraser(){
  Array.from(grids).forEach(function(item){
    item.removeEventListener("click",setErased)
}
)}