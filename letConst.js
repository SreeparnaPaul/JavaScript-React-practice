//let & const declarations are hoisted
console.log(a);//Uncaught reference error-- cannot access a before initialization
// From hoisting to till get some value on a or initialized some value, that time is called 
// temporal dead zone.Once the value assigned temporal dead zone ends.If we want to access a value within
//  that temporal dead zone, we will get reference error.
let a=10;//in case of let ,a is assigned undefined in script
console.log(a);
var b=10;//in case of var, b is assigned undefined to global object;
// let a =100;-->Syntaxerror, because redeclaration is not possible;
var b=100; //possible in case of var
const c=12;//cannot change
// const d;-->Syntax error, missing initializer in const declaration
