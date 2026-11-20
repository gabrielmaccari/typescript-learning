function  add(a:number, b:number) : number {
    return a + b
}

function log(message:string) {
    console.log(message)
}

function logAndThrow(errorMessage:string) : never {
    console.log(errorMessage)
    throw new Error(errorMessage)

}

const logMsg = (message : string) => {
    console.log(message)
}

//Passing function as parameters to another function
//The name(in our case msg) of parameter inside of type doesn't really important for TypeScript
function performJob(cb : (msg : string) => void) {
 //...
 cb('Job Done!')   
}

performJob(logMsg)                

//Typing functions
type User {
    name : string;
    age  : number;
    greet : () => string
} 

let user: User = {
    name : "Gabriel",
    age  : 31,
    greet() {
        console.log("Hello guys")
        return this.name
    }
}

function greetS() : string {
        console.log("Hello guys")
        return "HI"
}

let user2 : User = {
    name  : "Gabriel",
    age   : 31,
    greet : greetS
}

user2.greet()