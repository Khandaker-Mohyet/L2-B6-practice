// sort

const numbers = [40, 100, 1, 5, 25, 10]
const fruits = ["Banana", "apple", "Cherry", "date"]

const sortNumber = numbers.sort((b, a) => b - a);

fruits.sort((a, b) => a.localeCompare(b))

// console.log(fruits)

// nasted array flat

// const arr = [25, 675, 37, [327, 326, [46, 87, 54, [83]]]]

// const flatArr = arr.flat(Infinity)
// console.log(flatArr)

const tagsFromPosts = [
    ["javascript", "react", "css"],
    ["node", "express"],
    ["css", "html", "react"]
]

const filterTags = [...new Set(tagsFromPosts.flat())];
console.log(filterTags)
