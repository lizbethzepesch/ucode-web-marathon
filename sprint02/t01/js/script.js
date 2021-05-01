let number = 1
var bigint = BigInt(374532456345340055637567)
let string = "hi"
let boolean = true
let null_ = null
var undef 
let obj = new Object()
let symb = Symbol("Sym")
var fun = function(){
    console.log("bar");
}
let res = ""
res += `number is ${typeof number}` + `\n`
res += `bigint is ${typeof bigint}` + `\n`
res += `string is ${typeof string}` + `\n`
res += `boolean is ${typeof boolean}` + `\n`
res += `null_ is ${typeof nnn}` + `\n`
res += `undef is ${typeof undef}` + `\n`
res += `obj is ${typeof obj}` + `\n`
res += `symb is ${typeof symb}` + `\n`
res += `fun is ${typeof fun}` + `\n`

alert(res)