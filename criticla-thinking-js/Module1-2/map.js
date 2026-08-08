// const obj = {
//     nextLevel: {courseId : "Level1"},
//     "Programing Hero": {courseId : "Level2"}
// }

// console.log(obj["Programing Hero"])

const course1 = {
    name: "Programing Hero"
}
const course2 = {
    name: "Next level web development"
}

// const obj= {}

// obj.nexLevel = {courseId: "level2"}
// obj[course1] = {courseId: "level1"}

const map = new Map()

map.set(course1, {courseId: "level1"})
map.set(course2, {courseId: "level2"})

console.log(map)