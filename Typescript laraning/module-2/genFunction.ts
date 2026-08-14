
const arrayWighString = (value: string)=>[value];

const arrayWithNumber = (value: number)=>[value];

const arrayWithUserObj = (value:{id:number; name: string})=>{
  return [value];
}

const arryWithGen = <T>(value:T) =>{
  return [value]
}

// constraint: strict rules deya

const addStudentToCourse = <T extends{id:number, name: string}>(studentInfo:T)=>{
  return{
    course: "Next Level",
    ...studentInfo,
  }
}

const student1 = {
  id: 123,
  name: "Khandaker",
  hasPen: true
}
const student2 = {
  id: 524,
  name: "Mohyet",
  hasCar: true,
  isMarried: true,
}