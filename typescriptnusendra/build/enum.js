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
    month[month["JAN"] = 0] = "JAN";
    month[month["FEB"] = 1] = "FEB";
    month[month["MAR"] = 2] = "MAR";
    month[month["APR"] = 3] = "APR";
    month[month["MAY"] = 4] = "MAY";
})(month || (month = {}));
console.log(month);
