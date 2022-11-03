def findShort(s):
    wordList = s.split("")
    smallest = len(wordList[0]) #get length
    for word in wordList:
        if len(word) > smallest:
            smallest = len(word)
    return smallest

print(findShort("Let's travel abroad shall we"))
#console.log(3 == findShort("bitcoin take over the world maybe who knows perhaps"));
#console.log(3 == findShort("turns out random test cases are easier than writing out basic ones"));
#console.log(2 == findShort("Let's travel abroad shall we"));
#Pass/Fail
# console.log(3 == findShort("bitcoin take over the world maybe who knows perhaps"));
# console.log(3 == findShort("turns out random test cases are easier than writing out basic ones"));
# console.log(2 == findShort("Let's travel abroad shall we"));

#const chai = require("chai");
#const assert = chai.assert;
#chai.config.truncateThreshold=0;

#describe("Basic tests", ()=>{
#      it("Testing for fixed tests", ()=>{
#         asset.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
#     asset.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3);
#    asset.strictEqual(findShort("Let's travel abroad shall we"), 2);
# });
#});
