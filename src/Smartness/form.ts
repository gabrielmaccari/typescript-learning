const nameEl = document.getElementById("user_name")

//Perceive the error when hovering the mouse, the input value can be HTMLElement or null
console.log(nameEl.value)

//Now I do the validation
if (!nameEl) {
    throw new Error('Name is null')
}

//Now perceive that we just must be HTMLElement type because I validated the null before
console.log(nameEl.value)
