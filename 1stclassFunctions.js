
a()

// b()//Difference between function statement and expression is in hoisting,a() gives output, 
// but b is undefined, as it is assigned to var

//Function statement aka Function declaration
function a(){
    console.log("a called");
}
a();
//Function expression
//this function expression is also example of anonymous function
var b = function(){
    console.log("b called");
}
b();


//Anonymous function
//Anonymous functions can be used when they used as vaLUE.
// function (){

// }-->Function without a identifier is anonymous function


//Named function expression
var c = function xyz(){
    console.log(xyz);

}
// xyz()--> give error, because xyz is assigned to variable, not exposed to the global scope,
//so, get reference error,xyz is not defined
c()

//Difference between arguments & parameters
var d = function (param1,param2){//when function get those values , that is called parameters
    console.log("d called",param1,param2);

}
d(1,2);//the values passing thorugh functions is called argumets

//first class functions or first class citizens --> ability to used like values
var e = function (param1){//passing function through arguments, is known as first class function
    console.log(param1);

}
e(function(){

});
var f= function (param1){
    //return function through a function is known as first classs functions
   return function xyz(){

   }

}
console.log(f());