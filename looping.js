const numbers = [1,2,3,4,5];
for(const number of numbers){
    console.log(number);
}
const name = 'Mufassir Mahmud';
for(const char of name){
    console.log(char);
}

const glass ={
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true,

}
for( const key in glass){
    console.log(key);
}

const keys = Object.keys(glass);
console.log(keys);

for(const key of keys){
    console.log(key);
}