let val1 = 10
let val2 = 5

function addNum(num1, num2) {

    let result = num1 + num2
    return result
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

// How this will execute

/*** 
 * Global execution --> set a context (this)
 * Memory phase (gather all variables) --> val1 = undefined and val2 = undefined, addNum = definition, result1 and result2 = undefined
 * Execution phase --> val1 = 10, val2 = 5, addNum (nothing happens)
 
 * Now for addNum a new variable environment is created and a new execution phase is created
 * In addNum's phase (context) --> memory phase (val1, val2, result)
 * In addNum's phase --> execution phase --> num1 = 10, num2 = 5, result is also calculated
 * The return value is returned to global execution
***/