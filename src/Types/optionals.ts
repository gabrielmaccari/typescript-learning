function generateError(msg?: string) {
    throw new Error(msg)
}

generateError()
generateError("API failed")

type User = {
    name : string,
    age : number,
    role? : 'admin' | 'guest'
}

let user : User = {
    name : "Gabriel",
    age : 12
}