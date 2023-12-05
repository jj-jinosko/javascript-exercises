const repeatString = function(string, num) {
    let output = string;
    if(num < 0){
        output = "ERROR";
    }
    else if (num == 0){
        output = "";
    }
    else {
        for (i = 0; i < num-1; i++){
            output += string;
        }
    }
return output;
};

// Do not edit below this line
module.exports = repeatString;