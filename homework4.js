//find(callback[, thisArg])
for (let i = 0; i < array.length; i++) {
    if (i in array && callback.call(thisArg, array[i], i, array)) {
        return array[I]
    }
} return undefined
//filter(callback,thisArg)
let array = [1, 2, 3, 4, 5]
let filterarr = []
for (let i = 0; i < array.length; i++) {
    if (i in array && callback.call(thisArg, array[i], i, array)) {
        filterarr.push(array[i])
    }
    return filterarr
}

//some
function some(arr, callBack) {
    for (let i = 0; i < arr.length; i++) {
        if (callBack(el, i, arr)) {
            return true
        }
    }
    return false
}
//map
let array = [1, 2, 3, 4, 5]
let maparr = []
for (let i = 0; i < array.length; i++) {
    if (i in array && callback.call(thisArg, array[i], i, array)) {
        maparr.push(array[i])
    }
    return maparr
}
//reduce
let myReduce = function (callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];

    for (const currentValue of this.slice(initialValue !== undefined ? 0 : 1)) {
        accumulator = callback(accumulator, currentValue);
    }

    return accumulator;
};
