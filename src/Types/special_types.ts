//What is the difference between null and undefined in TypeScript
// - Undefined is when the value is never assigned, just declared 
// - While null means intentionally empty

let x: number | undefined 
console.log(x) //Undefined

let user : null | string = null