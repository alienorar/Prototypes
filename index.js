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
    arr.forEach((item)=> {
new_arr.push(arr.splice(item,1,item))
    
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

// Tushunmadim


