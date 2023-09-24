function a (){
    var b=10;
    c();//Lexical parent of c is a
    function c(){
        console.log(b);
    }

}
// var b=10;
a();//Lexical environment of a is global environment
console.log(b);//b is not defined, because var b is in local scope
//Lexical environment of c() is environtment of its lexical parent which is a() and a's parent,
//  which is the global environment , so c has the access of all variables.this whole 
// chain is known as scope Chain