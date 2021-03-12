"use strict";
var list = /** @class */ (function () {
    function list() {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        this.data = elements;
    }
    //why (...elements) karena itu untuk pasing 3 parameter-> rest parameter 
    list.prototype.add = function (elements) {
        this.data.push(elements);
    };
    list.prototype.addMultiple = function () {
        var _a;
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        (_a = this.data).push.apply(_a, elements);
    };
    list.prototype.getAll = function () {
        return this.data;
    };
    return list;
}());
var numbers = new list(1, 2, 3);
numbers.add(4);
numbers.addMultiple(1, 2, 3);
console.log(numbers.getAll());
var random = new list(1, 2, 'b', 2);
random.add("duewhudha");
random.add(1233);
random.addMultiple('dwd', 12);
console.log(random.getAll());
