const sumAll = function(startPoint, endPoint) {
    if (!(Number.isInteger(startPoint)) || !(Number.isInteger(endPoint))){
        return "ERROR";
    }
    else if (startPoint < 0 || endPoint < 0){
        return "ERROR";
    }
    else if (startPoint < endPoint){
        start = startPoint;
        end = endPoint;
    }
    else if (startPoint > endPoint){
        start = endPoint;
        end = startPoint;
    }
    let result = 0;

    for (let i = start; i <= end; i++){
        // console.log(i);
        result += i;
        // console.log(result);
    }
    return result;
};

// console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
