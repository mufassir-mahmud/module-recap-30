// function add(a,b){
//     const result = a+b;
//     return result;
// }
function add(a,b){
    
    return a+b;
}
const sum = add(10,20);
console.log(sum);
const add3 = (a,b) => a+b;
const sum2 = add3(5,6);
console.log(sum2);
const add4 = (num1,num2,num3) => num1*num2*num3;
const mult = add4(2,3,4);
console.log(mult);

const intro = () =>{
    console.log('Mufassir');
}
console.log(intro);