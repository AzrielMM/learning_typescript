interface Array<T> {
    max(this: Array<number>): number;
    min(this: Array<number>): number;
    toIntArray(this: Array<number>, round?: boolean): Array<number>;
}

Array.prototype.max = function () {
    const list: Array<number> = this;

    let max_num: number = list[0];

    list.forEach(num => {
        if (num > max_num) {
            max_num = num;
        }
    });

    return (max_num);
}

Array.prototype.min = function () {
    const list: Array<number> = this;

    let min_num: number = list[0];

    list.forEach(num => {
        if (num < min_num) {
            min_num = num;
        }
    });

    return (min_num);
}

Array.prototype.toIntArray = function (round: boolean = true) {
    const list: Array<number> = this;
    let outList: Array<number> = [];

    list.forEach(num => {
        if (round) {
            outList.push(Math.round(num));
        }
        else {
            outList.push(parseInt(num.toString().split(".")[0]));
        }
    });

    return (outList);
}

