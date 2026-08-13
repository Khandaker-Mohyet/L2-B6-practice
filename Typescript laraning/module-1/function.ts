function addNormal (a: number, b: number) {
 return a + b;
}
// console.log(addNormal(5, 10))

const addArrow = (a: number, b: number) => {
 return a + b;
}
// console.log(addArrow(10, 10))

// object => function=> method

const poorUser = {
 name: "Khandaker",
 balace: 500,   
 addBalance(money: number) {
  return this.balace + money;
 }
}

// console.log(poorUser.addBalance(100))

const arr: number[] = [1, 2, 3, 4, 5]; 

const sqrArry = arr.map((ele:number):number=>{return ele * ele})

console.log(sqrArry)