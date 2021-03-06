"use strict";
var Asus = /** @class */ (function () {
    function Asus(name, isGamming) {
        this.name = name;
        this.isGamming = isGamming;
    }
    Asus.prototype.on = function () {
        console.log("nyala");
    };
    Asus.prototype.off = function () {
        console.log("Mati");
    };
    return Asus;
}());
var MacBook = /** @class */ (function () {
    function MacBook(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    MacBook.prototype.on = function () {
        console.log("nyala");
    };
    MacBook.prototype.off = function () {
        console.log("Mati");
    };
    return MacBook;
}());
var asus = new Asus('Asus', true);
console.log(asus.on());
console.log(asus.off());
