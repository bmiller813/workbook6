// #Trolls are attacking your comment section!

// #A common way to dal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat

// #Your task is to write a function that takes a string and returns a new string with all vowels removed

// #For example, the string "This website is for losers LOL!" would become "Ths wbst s fr ksrs ll"

// #Note: for this kata y isn't considered a vowel.

// def disemvowel(text):
//     vowels = "aeiouAEIOU" #not y
//     output = ""
//     for t in text:
//         if t not in vowels:
//             output+=t
//     return output



function disemvowel(text){
    vowels = 'aeiouAEIOU';
    output = '';
    for(t of text){
        if(!vowels.includes(t)){
            output += t
        }
    }
    return output;
}

result = disemvowel('This website is for losers LOL!');
console.log(result);
console.log(result === 'Ths wbst s fr lsrs LL!');




// #TEST
// result = disemvowel("This website is for losers LOL!")
// print(result)
// print(result == "Ths wbst s fr lsrs LL!")

// #import codewars_test as test
// #from solution import disemvowel

// #@test.describe("Fixed Tests")
// #def basic_test():
// #   @test.it("First fixed test")
// #   def fixed_test_1()
// #