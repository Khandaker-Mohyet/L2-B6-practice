type User = {
  name: string;
  age: number;
}

// interface only used for object type-> arrya, object, function

interface IUser{
  name: string;
  age: number;
}

type Role = {
  role: 'admin' | 'user' ;
}

interface IUserWithRole extends IUser{
  role: "admin" | "user";
}

type userWithRole = User & Role;

const user1: userWithRole = {
  name: "John Doe",
  age: 30,
  role: "admin"
};

const user2:IUser = {
  name: "Jane Smith",
  age: 25
};

type Add = (num1: number, num2:number) => number;

interface IAdd{
  (num1: number, num2:number): number;
}


type friends = string[];
interface IFriends{
  [index: number]: string;
}
const friends : friends = ['Alice', 'Bob', 'Charlie'];

