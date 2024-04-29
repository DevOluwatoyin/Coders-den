const name ="seyi"
time = 3

if (time >1){
const name = "seye"
var friend ="ami"
}

console.log(friend)
console.log(name)

// console.log(greeting)
const greeting = "say Hi"
//  greeting = "say Hello"

function sumAllNums() {
    let sum = 0
    console.log(arguments)
    console.log(arguments.length)
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  }
  console.log(sumAllNums(1, 2, 3, 4))

   obj ={
    1:1,
    2:2
  }

  console.log(obj.length)