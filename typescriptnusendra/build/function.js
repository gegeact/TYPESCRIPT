"use strict";
// typedata pada balika function
function getName() {
    return "Hello, My name is Gege";
}
console.log(getName());
function getAge() {
    return 123;
}
function printName() {
    console.log("print name");
}
printName();
//////////argument as type
function multiply(val1, val2) {
    return val1 * val2;
}
var result = multiply(12, 5);
console.log(result);
///////// function as type
// type Tambah = (val1: number, val2: number) => number;
// const Add: Tambah = (val1: number, val2: number); number => {
//     return val1 + val2;
// }
//default parameter
var fulName = function (first, last) {
    if (last === void 0) { last = "gumelar"; }
    return first + " " + last;
};
console.log(fulName("Nusendra", "mrop"));
// optional parameter
var getUmur = function (val1, val2) {
    return val1 + " " + val2;
};
console.log(getUmur("A"));
