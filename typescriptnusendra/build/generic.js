"use strict";
function getData(value) {
    return value;
}
//(value adalah parameter)
console.log(getData("Gegeact").length);
console.log(getData(123).length);
//any tanpa generic type angka bisa di LENGTH
//hstudny angka tidak bisa di lenght
//jadi pakai generic type
//generic
function myData(value) {
    return value;
}
//<T>/type ga harus T sebenernya
console.log(myData("Gegeact").length);
console.log(myData(123));
//arrowfuntion typescript biasa
var arrowFunc = function (value) {
};
//typescript jsx
var arrowFunc2 = function (value) {
};
