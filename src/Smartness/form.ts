const nameEl = document.getElementById("user_name")

//Perceive the error when hovering the mouse, the input value can be HTMLElement or null
console.log(nameEl.value)

//Now I do the validation
if (!nameEl) {
    throw new Error('Name is null')
}

//Now perceive that we just must be HTMLElement type because I validated the null before
console.log(nameEl.value)


////////////////////////////////////////
///////     ! and ? operators /////////
///////////////////////////////////////

//An elegant way to say that a Element can't be null or undefined
const ageEl = document.getElementById("user_age")!

//And a better way to verify if the element is null or undefined
console.log(ageEl?.value)


////////////////////////////////////////
///////     TypeCasting        /////////
///////////////////////////////////////

const ageEl2 = document.getElementById("user_age") as HTMLInputElement | null