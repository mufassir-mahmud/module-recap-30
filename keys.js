const glass ={
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true,

}
console.log(glass);
const keys = Object.keys(glass)
console.log(keys);
const values = Object.values(glass);
console.log(values);
const entries = Object.entries(glass)
console.log(entries);
delete glass.isCleaned;
console.log(glass);

// Object.freeze(glass);
glass.source = 'Bangladesh';
console.log(glass);