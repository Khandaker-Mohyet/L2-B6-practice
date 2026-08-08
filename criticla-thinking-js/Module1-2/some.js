const numbers = [1, 2, 3, 4, 5];

const hasEvenNumber = numbers.some((number) => number % 2 === 0)

// console.log(hasEvenNumber)

const currentUserRoles = ["user", "editor"];

const featureAccessRoles = ["admin", "manager"]

const canAccess = currentUserRoles.some((role)=>featureAccessRoles.includes(role))
// console.log(canAccess)

// const arr= Array.from({length:5}).fill(1)
// const arr= Array.from({length:5}, (_,i)=>i)
const arr= Array.from([5, 2, 3], (value, i)=> value*value)

// console.log(arr)

// range