//function defined by declaration are hoisted to the top
funcDeclaration();
function funcDeclaration(){
    console.log('I am inside a function declaration');
}

//functions defined by an expression are not hoisted to the top. They remain where they are defined
funcExpression();
var funcExpression = (){
    console.log('I am inside a function declaration');
};

//so to avoid confusion, it is best practice to yse functions after they are defined