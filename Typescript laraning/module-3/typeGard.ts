// type gard

// type of

const add = (num1: number | string, num2: number | string)=> {
  if(num1 === "number" && num2 === "number"){
    return num1+num2
  }else{
    num1.toString() + num2.toString()
  }
}

// in guard

type NormalUser = {
  name : string;
}

type AdminUser ={
  name: string;
  role: "Admin"
}

const gerUserInfo=(user: NormalUser | AdminUser)=>{
  if("role" in user){
    console.log(`This${user.name} and his role is ${user.role}`)
  }else{
    console.log(`This${user.name}`)
  }
}

// gerUserInfo({name: "Normal", role: "Admin"})


// OOP: instance of type gard type narrowing

class Person {
  name: string;

  constructor(name: string){
    this.name= name;
  }

  getSleep(numOfhours: number){
    console.log(`${this.name} daily ${numOfhours} hours Gumai`)
  }
}

class Students extends Person{

  doStudy(numOfhours: number){
    console.log(`${this.name} daily ${numOfhours} hours study kore`)
  }

}

// const student3 = new Students("Mohyet")

// student3.getSleep(8)

class Teachers extends Person{

  doClass(numOfhours: number){
    console.log(`${this.name} daily ${numOfhours} hours Class nay`)
  }

}

const getUserInfo = (user:Person)=>{
  if(user instanceof Students){
    user.doStudy(10)
  }else if(user instanceof Teachers){
    user.doClass(5)
  }else{
    user.getSleep(8)
  }
}

const student4 = new Students("Khandaker Mohyet")

getUserInfo(student4)



