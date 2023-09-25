// closure
function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    y()
}
x();
//function along with its lexical scope is known as closure
//A closure is the combination of a function bundled together (enclosed) with references to its 
// surrounding state (the lexical environment). 
// In other words, a closure gives you access to an outer function's scope from an inner function. 

function z(){
    var a=7;
    function m(){
        console.log(a);
    }
   return m;//return the whole lexical scope
}
var p=z();
console.log(p);
p();//it will print the value of a,which is 7,because p contains the function z
//function along with its bundled code, forms a closure


function q(){
    var a=7;
    function r(){
        console.log(a);//prints 100, because it is taking the reference of a
    }
   a=100;
   return r;
}
var c=q();
console.log(c);
c();
//complex example of closure
function f(){
    var b=120;
    function i(){
        var a=7;
    function j(){
        console.log(a,b);
    }
    j()
    }
    i();
}
f();
//uses of closures
// 1.Module design pattern
// 2.Currying
// 3.setTimeouts
// 4.Iterators
// 5 functions like once
// 6. memoize
