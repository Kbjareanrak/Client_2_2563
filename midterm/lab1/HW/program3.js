const number = [1 ,2 ,3 ,4 ,5 ,6 ,7];
let result = number[0];

for(let i = 1;i<number.length;i++){
    result += number[i];
}

console.log("ค่าเฉลี่ยคือ "+ (result/number.length));