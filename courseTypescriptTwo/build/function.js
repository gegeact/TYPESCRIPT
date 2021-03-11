"use strict";
// type data pada balikan function
function getName() {
    return "hello, my name is Gegeact";
}
console.log(getName());
function getAge() {
    return 123;
}
function printName() {
    console.log("print name");
}
printName();
///////////argumen type
function multiply(val1, val2) {
    return val1 * val2;
}
var result = multiply(2, 5);
console.log(result);
var age = 123;
var Add = function (val1, val2) {
    return val1 + val2;
};
console.log();
//deafult parameter
var fulName = function (first, last) {
    if (last === void 0) { last = "Gumelar"; }
    return first + " " + last;
};
// last: string = "gumelar" -> adalah default field, sehingga bila di panggil ahnya 1 nama,
//akan menggunakan default parameter
console.log(fulName("Gegeact"));
//optional parameter
var getUmur = function (val1, val2) {
    return val1 + " " + val2;
};
//optional parameter yaitu, bilakita data b tidak di isi 
//maka yang muncul adalah undifine
//optional parameter (?)
//type data number ga bisa di undifine or optional parameter
console.log(getUmur("A", "gege"));
