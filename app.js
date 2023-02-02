const array1 = [5, 1, 3, 2, 6]

// Reduce Function

const sumArray = array1.reduce((acc, currentValue) => {
    acc += currentValue
    return acc
}, 0)
// console.log(sumArray)

// acc acts as a sum variable. it accumulates each value with other until iteration is over.


// find largest element in the array using normal method.
function largestValue(array1) {
    let maxValue = 0
    for (let index = 0; index < array1.length; index++) {
        if (array1[index] > maxValue) {
            maxValue=array1[index]
        } 
    }
    return maxValue;
}
// console.log(largestValue(array1))

// find largest element in the array using reduce.
// const maxArray = array1.reduce((acc, curr)=>{
//     if (curr > acc) {
//         acc = curr
//     }
//     return acc
// }, 0)
// console.log(maxArray)

// Example - 3

// Turn an array of numbers into a long string of all those numbers.


// map method - question

const users = [
    {firstName: 'akshay', lastName: 'saini', age: 24},
    {firstName: 'jissmon', lastName: 'jose', age: 26},
    {firstName: 'ajith', lastName: 'kumar', age: 26},
    {firstName: 'prithvi', lastName: 'kumar', age: 28},
    {firstName: 'bhushan', lastName: 'kumar', age: 24}
]

// get an array of full name
// ['akshay saini', 'jissmon jose', ... ]

function getFullName(users) {
    let fullNamesArr = []
    users.forEach(element => {
        let fullName = element.firstName + ' ' + element.lastName
        fullNamesArr.push(fullName)    
    });
    return fullNamesArr
}
// console.log(getFullName(users))


// using map function
const fullNamesArray = users.map((user) => {
    return `${user.firstName} ${user.lastName}` 
});

// console.log(fullNamesArray)

const usersArr = [
    {firstName: 'akshay', lastName: 'saini', age: 24},
    {firstName: 'jissmon', lastName: 'jose', age: 36},
    {firstName: 'ajith', lastName: 'kumar', age: 46},
    {firstName: 'prithvi', lastName: 'kumar', age: 28},
    {firstName: 'bhushan', lastName: 'kumar', age: 24}
]

// first name of all people whose age < 30.

// chain filter and map function.
const output = usersArr.filter(user => user.age < 30).map((user) => {
    return user.firstName
})
console.log(output)


