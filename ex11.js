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
try {
throwErrorFunction();
console.error("例外が発生しました:",error.message);
}FINALLY{
console.log("通常通りに進行します:");
}
try {
throwErrorFunction();
}catch(error){
console.error("例外が発生しました:",error.message);
}finally{
console.log("通常通りに進行します:");
}
class MyClass {
constructor(size,age){
this.size = size;
this.age = age;
}
print_size(){
console.log(this.size);
}
add_age(x){
this.age += x;
}
}
my_obj = new MyClass(160,53);
my_obj.print_size()
let my_class = {
age:53,
size:160,
print_size(){
console.log(this.size);
},
add_age(x){
this.age += x
}
}
my_class.add_age(4)
my_class.add_age(4);
my_class.age;
class Calculator {
    constructor() {
        this.result = 0;
    }

    add(a, b) {
        this.result = a + b;
        return this.result;
    }

    subtract(a, b) {
        this.result = a - b;
        return this.result;
    }

    getResult() {
        return this.result;
    }
}
const calculatorOb = {
result:0,

add:function(a,b) {
this.result = a + b;
return this.result;
},

subtract:function(a,b) {
this.result = a -b;
return this.result;
},

getResult:function(){
return this.result;
}
};
const calculator = new Calculator();
console.log(calculator.add(5,3));
console.log(calculator.getResult());
console.log(calculatorOb.add(5,3));
console.log(calculatorOb.getResult());