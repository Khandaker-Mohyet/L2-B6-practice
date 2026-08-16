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