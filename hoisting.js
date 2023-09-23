getName();//this will give the output
console.log(x);// this results undefined
console.log(getName);//Prints the function
getNumber()//Prints getNumber is not a function, because, before declaration arrow function will behave like variable
//before execution in memory getNumber allocates undefined in javascript
var x=7;//if we comment this line , and print console.log(x), will get not defined, because x is 
// not present in the function, not defined and undefined are not same
getName2(); //this is also is not a function, because, before declaration this syntax of writing a 
// function will behave like variable
//before execution in memory getName2 allocates undefined in javascript
function getName(){
    console.log("Namaste Javascript");
}
getName();
console.log(x);
console.log(getName);//Prints the function
// in case of javascript before execution of a function, javascript allocates memory for each variable 
// and functions, for var x=7, it allocates undefined, for getName() it allocates the whole function

var getNumber=()=>{
    console.log("Number:3");
}
var getName2=function (){
    console.log("Namaste ");
}
getName2();
getNumber();