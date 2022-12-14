function pattern(n) {
    if (n < 1) {
        return '';
    }
    let output = [];
    //Happy Coding ^_^
    for (var i = 1; i <= n; i++) {
        let row = '';
        for(r=0;r<i;r++){
            row += `${i}`; 
        }
        output.push(row);
    }
    return output.join("\n");
}
console.log(pattern(5));
console.log("1\n22\n333\n4444\n55555" == pattern(5));
/*
Test.assertEquals(pattern(1), "1"); 
Test.assertEquals(pattern(2), "1\n22"); 
Test.assertEquals(pattern(5), "1\n22\n333\n4444\n55555"); 
*/