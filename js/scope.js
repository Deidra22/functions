//global scope
var globalVar = 'Hello World';

function sayHello(){
    console.log(globalVar);

    //local/function scope
    var funcVar = 'I\'m scoped inside a function.';
    console.log(funcVar);
}

sayHello();

console.log(globalVar);

// block scope
if(true){
    // let is a var. can be changed
    // const stores a constant value only. cannot be changed
    var blockVar = 'I\'m inside a block';
    console.log(blockVar);
} // force block of statements to run

// console.log(blockVar);

// function secondFunction(){
//     console.log(funcVar);
// }
// secondFunction();

//nested scope
function outerFunction(){
    const outer = 'I am defined in outerFunction';
    console.log(outer);

    function innerFunction(){
        const inner = 'I am defined in innerFunction';
        console.log(inner);
    }
    //innerFunction();
    // console.log(inner);
    return innerFunction;
}
outerFunction()(); //the extra () and above return accesses the innerFunction


