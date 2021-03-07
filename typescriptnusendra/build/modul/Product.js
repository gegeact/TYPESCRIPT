"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var asus_1 = __importDefault(require("./asus"));
var MacBook_1 = __importDefault(require("./MacBook"));
var asus = new asus_1.default("Zenbook", true, true);
console.log(asus);
var macbook = new MacBook_1.default(2017, false, false);
console.log(macbook);
macbook.a();
macbook.b();
