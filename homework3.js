function uniques(arr) {
    let unique = {}
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i]
        if (unique[element]) {
            return false;
        } else {
            unique[element] = 1;
        }
    }
    return true;
}
///////////////////////////////////
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
    function sumOfPrimes(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            sum += arr[i];
        }
    }
    return sum;
}
let num = [1,2,3,4,5,6,7,8,9]
console.log(sumOfPrimes(num));
////////////////////////////////////////////////////////////
function maxProduct (arr){
    let product = -Infinity
    for (let i = 0; i < arr.length - 1; i++) {
        const product1 = arr[i] * arr[i + 1];
        product = Math.max(product, product1);
    }
    
    return product;
}
let arr = [1,2,3,4,5,6]
console.log(maxProduct(arr));
////////////////////////////////////////////////////////////