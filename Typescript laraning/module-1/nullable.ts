const getUser = (input: string | null )=>{
  if(input){
    console.log(`from DB: ${input}`)
  }else{
    console.log(`No user found`)
  }
}

getUser(null)