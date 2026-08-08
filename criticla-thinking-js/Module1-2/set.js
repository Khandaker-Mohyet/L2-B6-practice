// const deeder = {userName: "Deeder"}
// const ibrahim = {userName: "ibrahim"}
// const ratul = {userName: "ratul"}

// const arr = ["apple", "mango", "egg", "lamon"]

// const set = new Set(arr);

// const test = Array.from(set)

// test.push("tomato")

// set.add(deeder)
// set.add(ibrahim)
// set.add(ratul)
// set.add(ibrahim)

// console.log(set.delete("lamon"))
// console.log(set)

//=============================================

const arr = ["apple", "mango", "egg", "lamon", "mango"];

// Brute Force

const removeDupArr = (arr)=>{
    const newArr = [];

    arr.forEach(element => {
        if(!newArr.includes(element)){
            newArr.push(element)
        }
    });

    return newArr;
}

// set


const removeDupSet = (arr)=>{
    const set = new Set(arr);

    return Array.from(set)

    
}

console.log(removeDupArr(arr));
console.log(removeDupSet(arr));