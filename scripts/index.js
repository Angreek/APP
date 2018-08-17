function calc(a, b, method) {
    return method(a, b);
}

function add(x, y) {
    return x + y;
}

function substract(x, y) {
    return x - y;
}

function mult(x, y) {
    return x * y;
}

function division(x, y) {
    return x / y;
}

function modulus(x, y) {
    return x % y;

}

function pow(x, y) {
    if (y >= 1) {
        res = x;
        for (i = 1, i <= y, i++) {
            return res *= x;
        } else {
        console.log("the exponent has to be integer and bigger then 0")
    }
}
console.log(calc(15,6, add1));
console.log(calc(15,6, substract1));
console.log(calc(15,6, mult));
console.log(calc(15,6, division));
console.log(calc(15,6, modulus));
console.log(calc(15,6, pow));