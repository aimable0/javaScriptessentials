// global scope.
var globalVar = "I am a global varible";
let  globalLet = "I am a global, but scoped with let";
const globalConst = "I am global but const";

{
//blocke scope
var blockVar = 'I am block scoped' //this is also visible outside of this block which is bad...
console.log(blockVar);
let ab = 'I am aab' //block scoped -- this is not visible outside this scope
const cd = 'I am a cd' //this is visible only in this scoppe
console.log(ab);
console.log(cd);
    
}
console.log(blockVar, "I am visible hhh even out side the block in which I was defined..");
//console.log(ab); //error: ab not defined cz it was defined in a block .. and it cant be seen outside of that block
//console.log(cd);

//function scopes.
function show() {
    // all of this function below are function(block)-scoped.. variables.
    var functionVar = "I am block-scoped var" 
    let functionLet = "I am block-scoped let"
    const functionConst = "I am block-scoped const"
}
show(); //these functions will be assigned...
console.log(functionVar) //this czs ReferenceError cz we cant access var defined within function outside those fncts
console.log(functionLet)
console.log(functionConst)