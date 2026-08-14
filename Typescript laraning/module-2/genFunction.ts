
const arrayWighString = (value: string)=>[value];

const arrayWithNumber = (value: number)=>[value];

const arrayWithUserObj = (value:{id:number; name: string})=>{
  return [value];
}

const arryWithGen = <T>(value:T) =>{
  return [value]
}