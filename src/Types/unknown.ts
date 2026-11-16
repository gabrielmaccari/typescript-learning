// Unknown vs Any
// Unknown forces you to do some checks while Any allows you do anything with the variable, like the standard javascript

function process1(val : any) {
    //val might not have .log function, but it lets anyway
    console.log(val.log)
}

function process2(val : unknown) {
    console.log(val.log)
}

function process3(val : unknown) {
    // Forces me to make sure that val has log function
    if (typeof val === 'object' && 
        !!val && 
        'log' in val && 
        typeof val.log === 'function') {
            val.log
        }
}