
text = "Now is the time"
//get last letter
console.log(text[text.length - 1]);

//print all but the last letter - loop or substr/slice

//list = text.split("") //convert to array from string example 1
list = [...text]; //convert to array from string example 2 using newer ES6

list.forEach((e, i) => {
    if (i < text.length - 1) {
        console.log(e)
    }
});

//convert back into a string
//reverse a list
output = "" 
for(i=text.length-1; i>=0; i--){
   output += text[i];
}
console.log(output);

console.log([...text].reverse().join("")); //join converts an array back to string

//reverse the words i a string
console.log(text.split("").reverse().join(" ")); 

//TERNARY OPERATOR IS A ONE LINE IF/ELSE
function isOfAgeMessage(age){
    return age >= 21 ? "YES" : "NO";
}
console.log(isOfAgeMessage(99));

function isEven(n){
    return n % 2 === 0; //Use Modelo division operator to get remainder
}
function makeNegative(num) {
    let negNum = "-" + num;
    let alreadyNeg = num
    let fnegNum = Number(negNum);
    if(num <= 0){
      Number(alreadyNeg);
      console.log(alreadyNeg);
    }else{
      negNum = "-" + num;
      console.log(fnegNum);
    }
    return fnegNum;
  }
  makeNegative(42);