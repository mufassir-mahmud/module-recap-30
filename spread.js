 const max = Math.max(2,4,5,1);
 console.log(max);
 const numbers = [3,4,5,61,99,22,77,86];
 const arrayMax = Math.max(...numbers);
 console.log(...numbers);
 console.log(arrayMax);

 const num1 = [11,22,33,44];
 const num2 = [...num1];
 num2.push(55);
 console.log(num2);
 console.log(num1);

 const num3 = [...num2,66];
 console.log(num3);