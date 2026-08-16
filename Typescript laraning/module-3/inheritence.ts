
class Parents {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age
    this.address = address;
  }

  getSleep(numberOfHours: number) {
    console.log(` ${this.name} ${numberOfHours} ghonta gumai `)
  }

}

class Student extends Parents {

}

const Student1 = new Student(`Khandake Mohyet`, 27, "Bangladesh")

Student1.getSleep(8)

class Teacher extends Parents {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {

    super(name, age, address)

    this.designation = designation;
  }

  takeClass(classHour: number) {
    console.log(`${this.name} ${classHour} ghonta class nai`)
  }
}

const teacher1 = new Teacher("Mr. Smart Teacher", 25, "Bangladesh", "Senior teacher")

teacher1.takeClass(5)