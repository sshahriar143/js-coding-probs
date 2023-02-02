const numbers =[12,35,74,215,354,1,6,];
const friends ={name:'Rahim', Age:25, gender:'male'};
console.log(typeof(numbers));    /* this not execute  */
console.log(typeof(friends));    /* this not execute  */
console.log(Array.isArray(numbers));
console.log(Array.isArray(friends));

const phoneNumber=[01,86,09,77,043];
const mixedNumber =phoneNumber.concat(numbers);
console.log(mixedNumber);