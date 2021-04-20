//traditional function
// function foo(){
//     return "foo"
// }

//arrow function
// foo = () => {
//     return "foo"
// }

// console.log(foo())




// function add(x){
//     return function(y){
//         return x+y
//     }
// }

// let z = add(3)
// console.log(z(2))

//arrow function of add fuction
// add = (x) => (y) => x+y
// let z = add(3)
// console.log(z(2))
// console.log(add(3)(2))


// sumAllarrow = (...arguments) => {
//     var total=0;
//    for (i in arguments) 
//    		total+=arguments[i];
//    return(total); 
// }
//  console.log(sumAllarrow(3,5,3,5,3,2,6))

// require('./mylib.js')

// foo1()

//แบบ module ต้องมีตัวแปรมารับ
// let mymodule = require('./mylib.js')

// mymodule.foo1()

// console.log(mymodule.bar())


//promt sync
// const prompt = require('prompt-sync')()
// const name = prompt('what is you name')
// console.log(`hello ${name}`)

//Event emitter
const EventEmitter = require('events')
class MyEmitter extends EvenEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('data' ,(a,b)=> console.log(`Foo: $(a),$(b)`))
myEmitter.emit('data', 'AAA','BBB')
