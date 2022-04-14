"use strict";
Array.prototype.titleAll = function () {
    const list = this;
    let outList = [];
    list.forEach(str => {
        let tempList = [];
        str.toLowerCase().split(" ").forEach(word => {
            tempList.push(word.charAt(0).toUpperCase() + word.slice(1));
        });
        outList.push(tempList.join(" "));
    });
    return (outList);
};
Array.prototype.findString = function (search_string) {
    const list = this;
    let outlist = [];
    list.forEach(str => {
        str.split(" ").forEach(word => {
            if (word.trim().toLowerCase() == search_string.trim().toLowerCase()) {
                outlist.push(str);
            }
        });
    });
    return (outlist);
};
//# sourceMappingURL=ArrayStringExtends.js.map