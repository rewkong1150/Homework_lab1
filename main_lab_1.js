var calculator = require('./Multiple');
var a = 1 ,b = 1 ; 
for (let i = 1; i <= 12; i++) { 
for (let j = 1; j <=12; j++) {
console.log(" "+a,"x",""+b);
console.log("Multiplication : "+calculator.multiply(a,b));
  b++;
}
console.log("-----------------");
b= 1;
a++
}


