console.log('Welcome to Functions...')
//simple function
function greet(name) {
   return 'hello, '
}
const greeting = greet()
console.log(greeting)
// handling undefined argument
function sum(num1, num2 = 0) {
  
     num1 = +num1 //(num1)
     num2 = +num2 //(mun2)

     if (!num1){
        return 'numbers not defined'
    }
    if (!num2){
        return 'numbers not defined'
    }




return num1 + num2


}

const result = sum(7, '9')
console.log(result)


// working with an arrays
function double(arr){
    if (!arr) {
        return 'arr is undefined'
    }
    if (!Array.isArray(arr)) {
        return 'arr is not an array'
    }
    const newArr = []
    for (const num of arr) {
        newArr[newArr.length] = num * 2
    }
    return newArr
}
   const doubledArray = double(1)

   //rest and spread operators
   const array = [5, 6, 7, 8, 9 ]
    console,log([1, 2, 3, 4, ...array, 10])

    //destructing
    const boj = {
        name: 'john',
        age: 45
    }
    const {name} = obj
    console.log(name)


    //callback
    function doMATH(num1, num2, func) {
        return func(num1, num2)
    }
    const res = doMATH(2, 5,(x, y) => x / y)
    console.log(doMATH)
