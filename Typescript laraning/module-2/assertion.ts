// Assertion in typescript is a way to tell the compiler about the type of a variable when you are sure about it, but the compiler is not able to infer it correctly. It allows you to override the type inference and specify a more specific type for a variable.

// There are two types of assertions in TypeScript: "as" syntax and angle-bracket syntax. The "as" syntax is the preferred way to perform type assertions in TypeScript, while the angle-bracket syntax is an older syntax that is still supported for backward compatibility.  

let anything : any;

anything = "Khandaker Mohyet";

// Using "as" syntax
let strLength1: number = (anything as string).length;

const kgToGm =(input: string | number)=>{
  if(typeof input === 'number'){
    return input * 1000;
  }else if(typeof input === 'string'){
    const [value]=input.split(' ');
    return `Converted output is ${Number(value) * 1000} gm`;
  }
}

console.log(kgToGm(2) as number)
console.log(kgToGm("5 kg") as string)