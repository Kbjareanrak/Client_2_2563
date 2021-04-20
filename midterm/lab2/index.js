// let foo = (s1, s2, callback) => {
//     return callback(s1,s2);
// }

// let callback = (res1,res2) => {
//     console.log('res: ',res1);
//     console.log('res: ',res2);
// }

// foo("foo","bar",callback)

//call back
// let foo = ( s1, s2 ,callback) => {
//     setTimeout( () => callback(s1+s2) ,500)
// }

// foo("foo", "bar", (res) => console.log(res))

//Promise
let foo = (s1 ,s2 ,callback) => {
    return new Promise( (resolve ,reject) => {
        setTimeout( () => { resolve(s1+s2)}, 1000)
    })
}

// foo("foo", "bar" ).then( (result) => {console.log(result)})

// let test = async() => {
//     let result = await foo("foo" ,"bar")
//     console.log(result)
// }
// test()

(async () => console.log(await foo("foo", "bar")))()