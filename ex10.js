while(true){
console.log(getFee(null));
while(true){
console.log(getFee(true));

function sumF(a,b){
return a + b;
}
var sumFE = function(a,b) {
return a + b;
}

const sumArro = (a,b) => a + b;
console.log(sumF(3,4));
console.log(sumFE(5,6));
console.log(sumArro(7,8));
function throw() {
}

function throwErrorFunction() {
throw new Error("これは例外です");
}
throwErrorFunction
try {
throwErrorFunction();
}catch(error){
console.error("例外が発生しました:",error.message);
}