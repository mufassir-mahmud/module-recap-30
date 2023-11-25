const actor = {
    name: 'Ananta',
    phone: '01821706537',
    age:45,
    money: '1234567890'
}
const {phone} = actor;
console.log(phone);
const {money} = actor;
console.log(money);


function doubleThem(a,b){
    return [a*2, b*2];
}

const [first, second] = doubleThem(3,4);
console.log(first, second);