let output = document.getElementById("display");
console.log(output);
let one = document.getElementById("one");
let two = document.getElementById("two");
let equal = document.getElementById("equal");
let plus = document.getElementById("add");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let ten = document.getElementById("ten");
let zero = document.getElementById("zero");
let sub = document.getElementById("sub");
let mul = document.getElementById("mul");
let dot = document.getElementById("dot");
let clear = document.getElementById("clear");
equal.addEventListener("click",calculation);



function calculation() {
  if (displaystring.length > 0) {
    let result = eval(displaystring);
    output.value = result;
    displaystring = result.toString(); 
  }
}




one.addEventListener("click", () =>{

  addInput(1);
});


two.addEventListener("click",() =>{
    addInput(2);
});

three.addEventListener("click",() =>{
    addInput(3);
});


four.addEventListener("click",() =>{
    addInput(4);
});

five.addEventListener("click",() =>{
    addInput(5);
});

six.addEventListener("click",() =>{
    addInput(6);
});

seven.addEventListener("click",() =>{
    addInput(7);
});


eight.addEventListener("click",() =>{
    addInput(8);
});

nine.addEventListener("click",() =>{
    addInput(9);
});

ten.addEventListener("click",() =>{
    addInput(10);
});

zero.addEventListener("click",() =>{
    addInput(0);
});


sub.addEventListener("click",() =>{
    addInput("-");
});

mul.addEventListener("click",() =>{
    addInput("*");
});


dot.addEventListener("click",() =>{
    addInput(".");
});



plus.addEventListener("click", () => {
addInput("+");
});


clear.addEventListener("click", () => {
  displaystring = "";
  output.value = displaystring;
});



let displaystring = "";
function addInput(number) {
  displaystring += number;
  
   output.value = displaystring; 
    
}
