

// Task 1

function longestName(arr) {
    let max_word = arr[0]
    for (const item of arr) {
        if (item.length > max_word.length) {
            max_word = item
        }
    }
    return ` The longest string in array is ${max_word}`
}

// console.log(longestName(["Alice", "Bob", "Christina", "David"])); // "Christina"

// Task 2

function removeConsecutiveDuplicates(str) {
    let result = []
    for (const item of str) {
        if (!result.includes(item)) {
            result.push(item)
        }
    }

    return result.join(" ")
}

// console.log(removeConsecutiveDuplicates("aaabbbcccaaa")); // "abc"

// Task 3

function rotateArray(arr, k) {
    let new_arr = []
    arr.forEach((item) => {
        new_arr.push(arr.splice(item, 1, item))

    });
    // return new_arr
}

// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]

// Task 4

function flattenArray(arr) {
    let result = arr.flat(Infinity)
    return result
}

// console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]


// Task 5

function multiplicationTable(n) {
    let result = []
    for (let i = 1; i <= n; i++) {
        let new_arr = []
        for (let g = 1; g <= n; g++) {
            new_arr.push(g * i)

        }
        result.push(new_arr)
    }

    return result
}

console.log(multiplicationTable(3));
// [
//   [1, 2, 3],
//   [2, 4, 6],
//   [3, 6, 9]
// ]

// Task 6

function splitArrayInHalf(arr) {
    let n = Math.ceil(arr.length / 2)
    let new_arr = [arr.slice(0, n), arr.slice(n)]

    return new_arr
}

console.log(splitArrayInHalf([1, 2, 3, 4, 5])); // [[1, 2, 3], [4, 5]]

// Task 7

function findGCD(arr) {
    let new_arr = []
    let min = Math.min(...arr)
    let index = arr.indexOf(min)

    for (let i = 1; i < min; i++) {
        if (min % i == 0) {
            new_arr.push(i)
        }

    }
    arr.splice(index, 0)

    let result = []
    for (let i = 0; i < arr.length; i++) {
        for (let g = 0; g < new_arr.length; g++) {
            if (arr[i] % new_arr[g] == 0) {
                result.push(new_arr[g])
            }

        }

    }

    let max = Math.max(...result)
    return max
}

console.log(findGCD([24, 36, 48])); // 12
// console.log(findGCD([7, 14, 21]));  // 7







