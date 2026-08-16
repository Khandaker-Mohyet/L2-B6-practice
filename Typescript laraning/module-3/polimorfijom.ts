// Polymorphism: bohurupi

class Person{
  getSleep(){
    console.log(`I am a normal person sleep for 8 hours`)
  }
}

class Student extends Person{
  getSleep() {
    console.log(`I am a student. I sleep 7 hours`)
  }
}

class NextLevel extends Person{
  getSleep() {
    console.log(` I am a Next Level developer. I sleep in 8 hour every day`)
  }
}

const getSleepHousr = (param:Person)=>{
  param.getSleep()
}

const person1 = new Person();
const person2 = new Student();
const nextLevel = new NextLevel();

// getSleepHousr(nextLevel)

class Shape{
  getArea(){
    return 0
  }
}

class Circle extends Shape{
  // area = Pi*r*r

  radius: number;

  constructor(radius: number){
    super()
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI*this.radius*this.radius;
  }
}

class Rectangle extends Shape{
  height: number;
  weight: number;

  constructor(height: number, weight: number){
    super()
    this.height= height;
    this.weight = weight;
  }

  getArea(): number {
    return this.height*this.weight;
  }
}

const getArea = (param:Shape)=>{
  console.log(param.getArea())
}

const shape1 = new Shape();
const shape2 = new Circle(10)
const shape3 = new Rectangle(10,20)

getArea(shape3)