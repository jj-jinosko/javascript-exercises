const removeFromArray = function(myArray, ...removeValues) {
    output = myArray;
    for (i = output.length - 1; i >= 0; i--){
        console.log(`check value at index i: ${i} = ${output[i]}`);
        for(value of removeValues){
            if (output[i] === value){
                console.log(`item ${output[i]} = value ${value}`);
                output.splice(i,1);
                console.log(output);
            }
        }
    }
    return output;
};


// Do not edit below this line
module.exports = removeFromArray;

// console.log(removeFromArray([1, 2, 3, 4], 3, 2));
// console.log(removeFromArray(["a", "b", "c", "d"], "c", "b"));
// console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));




// const removeFromArray = function(myArray, ...removeValues) {
//     output = myArray;
//     for (item of output){
//         console.log('check item = ', item);
//         for(value of removeValues){
//             console.log('value', value);
//             if (item == value){
//                 console.log(`item ${item} = value ${value}`);
//                 index = output.indexOf(item);
//                 output.splice(index, 1);
//                 console.log(output);
//             }
//         }
//     }
//     return output;
// };
