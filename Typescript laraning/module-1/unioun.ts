

type UserRole = "admin" | "user" ;

const getDashboard = (role: UserRole)=>{
  if(role === "admin"){
    return "Admin Dashboard"
  } else if(role === "user"){
    return "User Dashboard"
  }else{
    return "guest dashboard"
  }
}