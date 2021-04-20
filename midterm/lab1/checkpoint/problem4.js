// use .map to create new number array

const strArr = ['1', '2', '3', '4', '5', '6', '7'];

// let arr = [];
// for(let i = 0;i<strArr.length;i++)
//     arr[i] = Number(strArr[i])

// for(let i = 0;i<strArr.length;i++)
//     console.log(typeof arr[i])


// strArr.forEach((item, index) => {
//     console.log(item + " : " + index)
    
// })

const result = strArr.map((item, index) => Number(item))

console.log(result)