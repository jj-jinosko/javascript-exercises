const leapYears = function(year) {
    if (year % 400 == 0){
        return true;
    }
    else if (year % 100 == 0){ // won't check this is divisible by 400
        return false;
    }
    else if (year % 4 == 0){
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;

// console.log('2000, ', leapYears(2000));
// console.log(leapYears(1985));
// console.log(leapYears(1900));

