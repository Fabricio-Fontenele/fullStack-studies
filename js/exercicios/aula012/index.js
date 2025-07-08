let varA = "A"
let varB = "B"
let varC = "C"

const backup = varA
varA = varB
varB = varC
varC = backup

console.log(varA, varB, varC)