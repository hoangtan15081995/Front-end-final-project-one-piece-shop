"use strict";
exports.__esModule = true;
exports.fCurrency = void 0;
var numeral_1 = require("numeral");
function fCurrency(number) {
    return (0, numeral_1["default"])(number).format(Number.isInteger(number) ? "$0,0" : "$0,0.00");
}
exports.fCurrency = fCurrency;
