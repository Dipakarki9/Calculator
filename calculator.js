let output = document.getElementById("display");
// console.log(output);
let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let adds = document.getElementById("adds");
let equals = document.getElementById("equals");
let clear = document.getElementById("clear");
let del = document.getElementById("del");
let sqrt = document.getElementById("sqrt");
let dot = document.getElementById("dot");
let mod = document.getElementById("mod");
let sub = document.getElementById("sub");
let mul = document.getElementById("mul");
let divide = document.getElementById("divide");

let displaystring = "";
function addInput(number) {
  displaystring += number;
  
   output.textContent = displaystring; /*div ma value hudaina textContent hunx*/
    
}




    zero.addEventListener("click", () => {
  addInput(0);
});

one.addEventListener("click", () =>{

  addInput(1);
});



two.addEventListener("click", () =>{

  addInput(2);
});


three.addEventListener("click", () =>{

  addInput(3);
});
 

four.addEventListener("click", () =>{

  addInput(4);
});





five.addEventListener("click", () =>{

  addInput(5);
});


six.addEventListener("click", () =>{

  addInput(6);
});

seven.addEventListener("click", () =>{

  addInput(7);
});



eight.addEventListener("click", () =>{

  addInput(8);
});

nine.addEventListener("click", () =>{

  addInput(9);
});

  
dot.addEventListener("click", ()=> {
  addInput(".");
});



adds.addEventListener("click", () => {
addInput("+");
});


sqrt.addEventListener("click" , () =>{
  addInput("√");

});


mod.addEventListener("click" , () => {
  addInput("%");
});
  

mul.addEventListener("click" , () => {
  addInput("*");
});

sub.addEventListener("click" , () => {
  addInput("-");
});




divide.addEventListener("click" , () => {
  addInput("/");
});


// equals.addEventListener("click",() => {


//   if (displaystring.length > 0) {
//     let result = eval(displaystring);
//     //   console.log(result);
//     output.textContent = result;
//     displaystring = result;
    
//   }
  
// });


equals.addEventListener("click",() => {
  if (displaystring.length > 0) {
    let expression = displaystring;
    
    
    if (expression.includes("√")) {
      expression = expression.replace("√", "Math.sqrt(");
      expression += ")";
    }
      
    let result = eval(expression);


     if (!Number.isInteger(result)) {
      result = parseFloat(result.tofixed);
    }
    output.textContent = result;
    displaystring = result;
    
  }
});











clear.addEventListener("click", () => {
  displaystring = " ";
  output.textContent = displaystring;
});

del.addEventListener("click", () => {
  let displayArray = displaystring.split("");
  //   console.log(displayArray);
  displayArray.pop();
  displaystring = displayArray.join("");
  output.textContent = displaystring;
});
