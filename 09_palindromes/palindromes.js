const palindromes = function (entry) {
    const entryClean = entry.toLowerCase().replace(/[^a-z0-9]/g, ""); // ^ means not the following characters
    const reversed = entryClean.split("").reverse().join("");
    if (entryClean == reversed){
        return true;
    }
    return false;
};

// const palindromes = (entry) =>

// Do not edit below this line
module.exports = palindromes;
