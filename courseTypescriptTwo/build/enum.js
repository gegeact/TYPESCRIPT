"use strict";
// enum
//numeric enum
// enum Mount {
//     JAN = 2,
//     FEB = 100,
//     MAR,
//     APR,
//     MAY
// }
// console.log(Mount);
// string enum
var Mount;
(function (Mount) {
    Mount["JAN"] = "Januari";
    Mount["FEB"] = "Februari";
    Mount["MAR"] = "Maret";
    Mount["APR"] = "April";
    Mount["MAY"] = "May";
})(Mount || (Mount = {}));
console.log(Mount);
