/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to accounbt for different data types.
*/
// function findShort(s) {
//     return screen.split(' ').reduce((min, word) => Math.min(min, word.length), Infinity);
// }
function findShort(s){
    let wordList = s.split(" ");
    let smallest = wordList[0].length; //We could use infinity here
    wordList.forEach(word => {
        if(word.length < smallest){
            smallest = word.length;
        }
    });
    return smallest;
}

console.log(3 == findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(3 == findShort("turns out random test cases are easier than writing out basic ones"));
console.log(2 == findShort("Let's travel abroad shall we"));
//Pass/Fail
// console.log(3 == findShort("bitcoin take over the world maybe who knows perhaps"));
// console.log(3 == findShort("turns out random test cases are easier than writing out basic ones"));
// console.log(2 == findShort("Let's travel abroad shall we"));
/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", ()=>{
    it("Testing for fixed tests", ()=>{
        asset.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
        asset.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3);
        asset.strictEqual(findShort("Let's travel abroad shall we"), 2);
    });
});
*/