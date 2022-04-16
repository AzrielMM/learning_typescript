Array.prototype.titleAll = function () {
    var list = this;
    var outList = [];
    list.forEach(function (str) {
        var tempList = [];
        str.toLowerCase().split(" ").forEach(function (word) {
            tempList.push(word.charAt(0).toUpperCase() + word.slice(1));
        });
        outList.push(tempList.join(" "));
    });
    return (outList);
};
Array.prototype.findString = function (search_string) {
    var list = this;
    var outlist = [];
    list.forEach(function (str) {
        str.split(" ").forEach(function (word) {
            if (word.trim().toLowerCase() == search_string.trim().toLowerCase()) {
                outlist.push(str);
            }
        });
    });
    return (outlist);
};
