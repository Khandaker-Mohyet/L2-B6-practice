

type User = {
  id: number,
  name: {
    firstName: string,
    lastName: string
  },
  gender: 'male' | 'female',
  contactNo: string,
  address: {
    city: string,
    country: string
  }
}


const user1: User = {
  id: 1,
  name: {
    firstName: 'John',
    lastName: 'Doe'
  },
  gender: 'male',
  contactNo: '1234567890',
  address: {
    city: 'New York',
    country: 'USA'
  }
}
const user2: User = {
  id: 2,
  name: {
    firstName: 'Jane',
    lastName: 'Smith'
  },
  gender: 'female',
  contactNo: '1234567890',
  address: {
    city: 'New York',
    country: 'USA'
  }
}

// console.log(user1)
// console.log(user2)

// function

type AddFunction = (a: number, b: number) => number;

const add: AddFunction = (a, b) => a + b;

console.log(add(10, 9))