// sprade operator, arry

const firends = ['Alice', 'Bob', 'Charlie'];
const newFriends = ['David', 'Eve'];
const schoolFriends = ['Frank', 'Grace'];

firends.push(...newFriends, ...schoolFriends);

// console.log(firends)

const user = {
 name: 'Mohyet',
 age: 30,
 city: 'Dhaka'
};

const otherInfo = {
 country: 'Bangladesh',
 profession: 'Engineer'
};

const updatedUser = { ...user, ...otherInfo };

console.log(updatedUser);