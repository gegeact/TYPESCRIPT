"use strict";
var Asus = /** @class */ (function () {
    function Asus(name, isGamming) {
        this.name = name;
        this.isGamming = isGamming;
    }
    Asus.prototype.on = function () {
        console.log('nyala');
    };
    Asus.prototype.off = function () {
        console.log('mati');
    };
    return Asus;
}());
var Macbook = /** @class */ (function () {
    function Macbook(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    Macbook.prototype.on = function () {
        console.log('nyala');
    };
    Macbook.prototype.off = function () {
        console.log('mati');
    };
    return Macbook;
}());
var asus = new Asus('asus', true);
console.log(asus.on());
console.log(asus.off());
var mb = new Macbook('mb', true);
console.log(mb.on());
console.log(mb.off());
