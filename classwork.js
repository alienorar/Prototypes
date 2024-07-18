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






// console.log(multiplicationTable(3));
// [
//   [1, 2, 3],
//   [2, 4, 6],
//   [3, 6, 9]
// ]


// Task 37

// function rotateArray(arr, k) {
//    for (let i = 0; i < k; i++) {
//   arr.unshift(arr.pop())

//    }

//    return arr
// }

// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]




// Task 39

function multiplicationTable(n) {
    let result = []

    for (let i = 1; i <= n; i++) {
        let new_arr = []
        for (let g = 1; g <= n; g++) {
            new_arr.push(i * g)
        }
        result.push(new_arr)
    }
    return result
}

// Task 40

function splitArrayInHalf(arr) {
    let n = Math.ceil(arr.length / 2)
    let new_arr = [arr.slice(0, n), arr.slice(n)]
    return new_arr
}

// console.log(splitArrayInHalf([1, 2, 3, 4, 5])); // [[1, 2, 3], [4, 5]]



// Task 41

function swapDiagonals(matrix) {
    let arr = []
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
            arr.push(matrix[i].reverse())
        }
        else {
            arr.push(matrix[i])
        }
    }
    return arr
}

// console.log(swapDiagonals([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]));
