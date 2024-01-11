const fibonacci = function(number) {
    arr = [1, 1];
    if(number<0){
        return "OOPS";
    }
    for(let i=2; i<number; i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[number-1];
};

// maybe there is a way to do this with a fn like replace?

// Do not edit below this line
module.exports = fibonacci;

