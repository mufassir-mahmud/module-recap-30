const getAge = (person) => person.age;
const actor = {name: 'Ananta', age:45};
const age = getAge(actor);
console.log(age);
const getThird = (numbers) => numbers[2];
const third = getThird([1,2,3,4,5]);
console.log(third);


const getPi = () => Math.PI;
console.log(getPi());

const doMath = (a,b,c) =>{
    const sum = a+b+c;
    const multy = a*b*c;
    const result = sum+multy;
    return result;
}
const math = doMath(1,2,3);
console.log(math);