interface Array<T> {
    titleAll(this: Array<string>): Array<string>;
    findString(this: Array<string>, search_string: string): Array<string>;
}

Array.prototype.titleAll = function () {
    const list: Array<string> = this;
    let outList: Array<string> = [];

    list.forEach(str => {
        let tempList: Array<string> = [];
        str.toLowerCase().split(" ").forEach(word => {
            tempList.push(word.charAt(0).toUpperCase() + word.slice(1));
        });
        outList.push(tempList.join(" "));
    });

    return (outList);
};

Array.prototype.findString = function (search_string: string) {
    const list: Array<string> = this;
    let outlist: Array<string> = [];

    list.forEach(str => {
        str.split(" ").forEach(word => {
            if (word.trim().toLowerCase() == search_string.trim().toLowerCase()) {
                outlist.push(str);
            }
        });
    });

    return (outlist);
};
