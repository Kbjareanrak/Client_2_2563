//Find Max and Min Number

const number = [13, 11, 9 ,20, 50, 35];
let Max, Min;

for(let i = 0;i<number.length;i++){
    if(i==0){
        Max = number[0];
        Min = number[0];
    }
    //condition find max number
    if(number[i]>Max){
        Max = number[i];
    }
    //condition find max number
    if(number[i]<Min){
        Min = number[i];
    }
}

console.log("Max Number is "+ Max);
console.log("Min Number is "+ Min);