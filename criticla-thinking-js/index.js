const firstArray = [];
const secoundArray = [];



for (let i=1; i<=600000;i++){
    if(i<=300000){
        firstArray.push(i)
    }

    secoundArray.push(i);
 
}
// const startTime = performance.now()
console.time("map1")
const firstUserList = firstArray.map((number)=>({userId:number}))
console.timeEnd("map1")

console.time("map2")
const secoundUserList = secoundArray.map((number)=>({userId:number}))
console.timeEnd("map2")

console.time("find")

const user = secoundUserList[400000];

// const user = secoundUserList.find(( user=>user.userId ===200000))

console.timeEnd("find")


// const endTime = performance.now()
// console.log(`This code took ${endTime-startTime}`)

// console.log(firstArray.length)
// console.log(secoundArray.length)