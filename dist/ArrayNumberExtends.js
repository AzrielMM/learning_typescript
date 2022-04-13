"use strict";
Array.prototype.max = function () {
    const list = this;
    let max_num = list[0];
    list.forEach(num => {
        if (num > max_num) {
            max_num = num;
        }
    });
    return (max_num);
};
Array.prototype.min = function () {
    const list = this;
    let min_num = list[0];
    list.forEach(num => {
        if (num < min_num) {
            min_num = num;
        }
    });
    return (min_num);
};
Array.prototype.toIntArray = function (round = true) {
    const list = this;
    let outList = [];
    list.forEach(num => {
        if (round) {
            outList.push(Math.round(num));
        }
        else {
            outList.push(parseInt(num.toString().split(".")[0]));
        }
    });
    return (outList);
};
//# sourceMappingURL=ArrayNumberExtends.js.map