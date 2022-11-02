#include <stdio.h>

void main(){
    char* name = "Bryan";
    if(name == "Bryan"){
        printf("Greetings, %s!", name);
    }else{
        printf("Hello, %s.", name); 
    }
    for(int i =0; i < 5; i++){
        print("%i", i);
    }
}


/*  went to linux terminal can compiled using gcc and the executed a.out

gcc main.c
./a.out

*/