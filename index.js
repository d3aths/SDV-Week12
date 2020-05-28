class Calculator {
constructor(numOne, numTwo){
this.numOne = numOne
this.numTwo = numTwo
}
add() {
    return this.numOne + this.numTwo
}
sub() {
    return this.numOne - this.numTwo
}
multi() {
    return this.numOne * this.numTwo
}
div() {
    return this.numOne / this.numTwo
}
}
let result = new Calculator(1786, 89)
//needs a var to store the output in

console.log(result.add())
//constructing a calculator class


//Last-In-First-Out method with an array

let stack = []
stack.push(1)
stack
stack.push(2)
stack
stack.push(3)
stack
let i = stack.pop()
console.log(i)
stack


//First-In-First-Out method with an array

let queue = []
queue.push(2)
queue
queue.push(4)
queue
queue.push(6)
queue
let j = queue.shift()
console.log(j)
queue