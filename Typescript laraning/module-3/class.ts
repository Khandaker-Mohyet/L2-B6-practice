// oop - class->>boject

class Animal {
  name: string
  species: string
  sound: string

  constructor(name: string, species:string, sound: string){
    this.name = name;
    this.species= species;
    this.sound = sound;
  }

  // method

  makeSournd(){
    console.log(`${this.species} sound is ${this.sound}`)
  }
}

const dog = new Animal ('Lalu', 'dog', 'Ghew ghew')
const cat = new Animal ('mimi', 'cat', 'maw maw')

// dog.makeSournd()

// parimater property

class Animal2 {
  
  constructor(public name: string, public species:string, public sound: string){
  }

  // method

  makeSournd(){
    console.log(`${this.species} sound is ${this.sound}`)
  }
}