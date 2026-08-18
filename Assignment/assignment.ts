// problem - 1

const formatValue = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    return value * 10;
  }

  if (typeof value === "boolean") {
    return !value;
  }

};

// Provlem - 2
const getLength = (value: string | any[]): number => {
  if (typeof value === "string") {
    return value.length;
  }

  if (Array.isArray(value)) {
    return value.length;
  }

  return 0;
};

// Provlem - 3

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Provlem- 4

type Item = {
  title: string;
  rating: number;
};

const filterByRating = (items: Item[]): Item[] => {
  return items.filter((item) => item.rating >= 4);
};

const items: Item[] = [
  { title: "Movie A", rating: 4.5 },
  { title: "Movie B", rating: 3.2 },
  { title: "Movie C", rating: 4.8 },
];

// console.log(filterByRating(items));

// Provlem - 5

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => user.isActive === true);
};

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

// console.log(filterActiveUsers(users));

// Provlem 6 

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
};

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

// printBookDetails(myBook);

// Provlem - 7

const getUniqueValues = (
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] => {

  const result: (string | number)[] = [];

  const addUnique = (value: string | number) => {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) {
        return;
      }
    }

    result[result.length] = value;
  };

  for (let i = 0; i < arr1.length; i++) {
    addUnique(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    addUnique(arr2[i]);
  }

  return result;
};


// Provlem - 8
type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {
  return products.reduce((total, product) => {
    const price = product.price * product.quantity;

    if (product.discount !== undefined) {
      const discountAmount = price * (product.discount / 100);
      return total + (price - discountAmount);
    }

    return total + price;
  }, 0);
};