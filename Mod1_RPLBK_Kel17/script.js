//root scope
var a = 0;
console.log("ini root scope: " + a);
function q2() {
    // child scope
    a = 5;
    console.log("ini child scope: " + a);
}
q2();
console.log("ini root scope: " + a);