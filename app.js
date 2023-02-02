const array1 = [5, 1, 3, 2, 6]

// Reduce Function

const sumArray = array1.reduce((acc, currentValue) => {
    acc += currentValue
    return acc
}, 0)
console.log(sumArray)

// acc acts as a sum variable. it accumulates each value with other until iteration is over.
