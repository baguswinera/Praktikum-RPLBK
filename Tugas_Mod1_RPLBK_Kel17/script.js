//root scope
var a = 0;
var q2 = ()=>{
    console.log("arrow function");
}
q2();

(a==0) ? console.log("true") : console.log("false");

console.log("ini root scope: " + a);

var angka = [4, 8, 9];
var dobel = angka.map(function(num){
    return num * 2;
});
console.log(angka);
console.log(dobel);

const myArray = [15, 3, 27]

const reducer = myArray.reduce((accumulator, currentValue)=>accumulator+currentValue)

console.log(reducer);