function reverseNumber(number) {
    if (number < 10) {
        return number
    } else {
        let lastnum = number % 10
        return lastnum * Math.pow(10, String(number).length - 1) + reverseNumber(Math.floor(number / 10))
    }
}
//////////////////////////////
function secondOccurrence(arr, num) {
    let firstNum = -1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            firstNum = i
            break
        }
    }
    if (firstNum !== -1) {
        for (let i = firstNum + 1; i < arr.length; i++) {
            if (arr[i] === num) {
                return i
            }
        }
    }
    return -1
}

//////////////////////////////
function countSubstringOccurrences(string, substring) {
    let count = 0
    let index = string.indexOf(substring)
    while (index !== -1) {
        count++
        index = string.indexOf(substring, index + 1)
    }

    return count
}
////////////////////////////////////
function replacePi(str) {
    if (str.length === 0 || str.indexOf("pi") === -1) {
        return str
    } else {
        let index = str.indexOf("pi");
        return str.substring(0, index) + "3.14" + replacePi(str.substring(index + 2))
    }
}
////////////////////////////////////////////
function sumDigits(num) {
    let sum = 0
    while (num >= 10) {
        sum = 0
        while (num > 0) {
            sum += num % 10
            num = Math.floor(num / 10)
        }
        num = sum
    }
    return sum
}
