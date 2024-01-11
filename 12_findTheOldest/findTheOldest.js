const findTheOldest = function (arr){
return arr.reduce(findOldest);
function findOldest(oldest, currentPerson){
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    if(oldestAge < currentAge){
        oldest = currentPerson;
    }
    return oldest;
}
};

const getAge = function (birth, death) {
    if(death == undefined){
        death = new Date().getFullYear();
    }
return death - birth;
};


// Do not edit below this line
module.exports = findTheOldest;
// search array of objects (iterate through each element)
// calculate the age
// keep the name, and change if next age is bigger
// return highest result from array