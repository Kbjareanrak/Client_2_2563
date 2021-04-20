//Find even and odd number

// const num = 51;

// if((num%2) == 0)
//    console.log(num + " is even number");
// else
//    console.log(num + " is odd number");

const arr = [1,2,3,4,5,6,7,8,9];
let EvenArr = [];
let OddArr = [];

for(let i =0;i<arr.length;i++){
   if((arr[i]%2) == 0)
      EvenArr.push(arr[i]);
   else
      OddArr.push(arr[i]);
}
console.log("Even Number is "+ EvenArr);
console.log("Odd Number is "+ OddArr);
