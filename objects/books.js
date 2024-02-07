// object constructor
// create a book class using an object constructor

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const theWaterStone = new Book('The Waterstone', 'Rebecca Rupp', 200, true);
const islandOfTheBlueDophins = new Book('Island of the Blue Dolphins', "Scott O'dell", 200, true);
const dune = new Book('Dune', 'Frank Herbert', 1000, true);
// murakami, brave new world aldous huxley, snow crash neal stephenson, the jungle upton sinclair
// war of art

console.log('hello')

console.log(theWaterStone.author);
console.log(theWaterStone.prototype);
console.log(theWaterStone.__proto__);
console.log(dune.toString);