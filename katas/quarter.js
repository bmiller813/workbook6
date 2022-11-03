
//which quarter of the year?
//input is a month number 1-12
//output quarter 1-4

function quarter(n){
    // if(n>=1 && n<=3){
    //     return 1;
    // }
    return math.ceil((n/12)*4)
}
console.log(quarter(1));
console.log(quarter(4));
console.log(quarter(11));
console.log(quarter(12));