// Prototype

// for object

// let a = { price: 2000 }
// let b = { price: 3000 }

// let c = {}

// Object.prototype.getPrice = function () {
//     return this.price || "c da hech narsa yuq batraka topgur"
// }

// console.log(c.getPrice());

// for string

// let str = "qachon tugaydi bu js"
// let text = "text"
// String.prototype.getLength = function () {
//     return this.length

// }
// console.log(str.getLength());

// work with __proto__


// let user = {
//     name: "user",
//     age: 18,
//     citizen: "UZB"
// }

// let admin = {
//     name: "user",
//     age: 28,
//     citizen: "US"
// }
// user.__proto__.getKeys = function () {
//     let result = [];
//     Object.defineProperty(this, "getKeys", { enumerable: false })
//     for (const keys in this) {
//         result.push(keys)
//     }

//     return result
// }

// console.log(user.getKeys());

// for string __proto__

// Task 2

// let text = "this object for __proto__"
// text.__proto__.countVowels = function () {
//     let count = 0
//     for (const i in this) {
//         if (this[i] == 'a' || this[i] == 'i' || this[i] == 'o' || this[i] == 'e' || this[i] == 'u') {
//             count += 1;
//         }
//     }
//     return count
// }
// console.log(text.countVowels());


// Task 1

// let arr = [3, 4, 5, 3]
// Array.prototype.countSum = function () {
//     let result = this.reduce((a, b) => a + b, 0)
//     return result
// }

// console.log(arr.countSum());

// Task 3

// let str = "Working with Prototypes"

// String.prototype.countLength = function () {
//     return this.length
// }
// console.log(str.countLength());

// Task 4

// let  board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]]
// let  word = "ABCCED"
// function findWord() {
//     let result = []
//     for (let element of board) {
// // console.log(board[i]);
//         for (let item of element) {
//           console.log(item);
//           if (item.includes(word)) {
//             console.log(true);
//           }
//         }
//     }
// }
// findWord()



// Date


// setInterval(() => {

//     let date = new Date()
//     let hours = date.getHours()
//     let minutes = date.getMinutes()
//     let seconds = date.getSeconds()

//     document.body.innerHTML = `${hours}:${minutes < 10 ? "0" + minutes : minutes}: ${seconds < 10 ? "0" + seconds : seconds}`
// },);


// (
//     function () {
//         let a = 20
//         console.log(a);
//     }
// )
// ()

