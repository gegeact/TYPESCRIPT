"use strict";
// enum
// numeric enums
// enum month {
//     JAN = 2,
//     FEB =100,
//     MAR,
//     APR,
//     MAY
// }
// console.log(month.APR);
// string enums
var month;
(function (month) {
    month["JAN"] = "Januari";
    month[month["FEB"] = void 0] = "FEB";
    month[month["MAR"] = void 0] = "MAR";
    month[month["APR"] = void 0] = "APR";
    month[month["MAY"] = void 0] = "MAY";
})(month || (month = {}));
console.log(month);
