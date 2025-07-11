/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"

FALSY
false 
0
'' "" ``
null / undefined
NaN
*/

// function falaOi() {
//   return "oi";
// }
// const vaiExecutar = false

// console.log(vaiExecutar && falaOi())

const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || "joaozinho" || c || d || e);
