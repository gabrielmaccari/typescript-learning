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

//Nullish coalescing (??)
//Returns the right value just if the left value is null or undefined

const name = user.name ?? "Anonimous"

// Difference betweeen Nullish coalescing (??) and ||
// || considers any value falsy(0, "", false, NaN, null, undefined) while ?? obly considers null or undefined

const a = 0 || 10;    // 10  (0 is falsy)
const b = 0 ?? 10;    // 0   (0 is not null/undefined)

const c = "" || "padrão";   // "padrão"
const d = "" ?? "padrão";   // ""

const e = false ?? true;    // false