"use strict";
Array.prototype.max = function () {
    var list = this;
    var max_num = list[0];
    list.forEach(function (num) {
        if (num > max_num) {
            max_num = num;
        }
    });
    return (max_num);
};
Array.prototype.min = function () {
    var list = this;
    var min_num = list[0];
    list.forEach(function (num) {
        if (num < min_num) {
            min_num = num;
        }
    });
    return (min_num);
};
Array.prototype.toIntArray = function (round) {
    if (round === void 0) { round = true; }
    var list = this;
    var outList = [];
    list.forEach(function (num) {
        if (round) {
            outList.push(Math.round(num));
        }
        else {
            outList.push(parseInt(num.toString().split(".")[0]));
        }
    });
    return (outList);
};
