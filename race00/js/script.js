let input = document.querySelector('.input')
let history = document.querySelector('.history')
let pow_is = false
function insert(num) {
	if(input.textContent.length === 26)
		return
	if(input.textContent == '0.'){
		input.textContent = "0." + num
		return
	}
	if(num === '.' && input.textContent == 0){
		input.textContent = "0."
		return
	}
	if(num === '.'){
		let number = input.textContent
		for (let i = number.length; i >= 0; i--){
			if(number[i] == '+' || number[i] == '-' || number[i] == '*' || number[i] == '/'){
				number = number.slice(i)
			}
		}
		if(number.includes('.'))
			return
	}
	if(input.textContent === 0){
		input.textContent = "0."
		return
	}
	if(input.textContent == 0 || input.textContent == 'Infinity' || input.textContent == '-Infinity') {
		input.textContent = ""
		input.textContent = input.textContent + num
	} else{
		if(input.textContent.slice(-1) == num && Number(isNaN(input.textContent.slice(-1))))
			return
		else input.textContent = input.textContent + num
	}
}

function clean() {
	input.textContent = "0"
}

function back() {
	let exp = input.textContent
	input.textContent = exp.substring(0, exp.length - 1)
	if(input.textContent == 0)
		input.textContent = "0"
}

function equal() { 
    history.textContent = input.textContent 
    let exp = input.textContent 
	if(pow_is){
		let p = input.textContent.split('^')
		console.log(p)
		input.textContent = Math.pow(p[0], p[1])
		pow_is = false
		return
	}
    if (exp) { 
        input.textContent = eval(exp) 
    } 
}

function percent() {
	history.textContent = input.textContent
	input.textContent = eval(input.textContent) / 100
}

function constant(name) {
	if(name == "pi") input.textContent = input.textContent + Math.PI.toFixed(8)
	if(name == "e") input.textContent = input.textContent + Math.E.toFixed(8)
}

function operation(name) {
	history.textContent = name + '(' + input.textContent + ')'
	if(name == "sqrt")
		input.textContent = Math.sqrt(eval(input.textContent))
	if(name == "sqr")
		input.textContent = Math.pow(eval(input.textContent), 2)
	if(name == "^-1")
		input.textContent = Math.pow(eval(input.textContent), -1)
}

function pow_to(){
	input.textContent = input.textContent + '^'
	pow_is = true
}

function factorial(n) {
	history.textContent =  input.textContent + '!'
	return (n != 1) ? n * factorial(n - 1) : 1
}

function fact() {
	input.textContent = factorial(+eval(input.textContent))
}

function log(name) {
	if(name == 'lg'){
		history.textContent = 'lg(' + input.textContent + ')'
		input.textContent = Math.log10(eval(input.textContent)).toFixed(8)
	}
	if(name == 'ln'){
		history.textContent = 'ln(' + input.textContent + ')'
		input.textContent = Math.log(eval(input.textContent)).toFixed(8)
	}
}

document.querySelector('.type').addEventListener('click', function() {
	if(document.querySelector('.type').textContent == "deg")
		this.textContent = "rad"
	else if(document.querySelector('.type').textContent == "rad")
		this.textContent = "deg"
})

function f(name) {
	if(name == 'sin') {
		if(document.querySelector('.type').textContent == "deg")
			input.textContent = parseFloat(Math.sin(eval(input.textContent)/180*Math.PI).toFixed(8).toString())
		else
			input.textContent = parseFloat(Math.sin(eval(input.textContent)).toFixed(8).toString())
	}
	if(name == 'cos') {
		if(document.querySelector('.type').textContent == "deg")
			input.textContent = parseFloat(Math.cos(eval(input.textContent)/180*Math.PI).toFixed(8).toString())
		else
			input.textContent = parseFloat(Math.cos(eval(input.textContent)).toFixed(8).toString())
	}
	if(name == 'tan') {
		if(document.querySelector('.type').textContent == "deg")
			input.textContent = parseFloat(Math.tan(eval(input.textContent)/180*Math.PI).toFixed(8).toString())
		else
			input.textContent = parseFloat(Math.tan(eval(input.textContent)).toFixed(8).toString())
	}
	if(name == 'ctg') {
		if(document.querySelector('.type').textContent == "deg")
			input.textContent = parseFloat(1/Math.tan(eval(input.textContent)/180*Math.PI).toFixed(8).toString())
		else
			input.textContent = parseFloat(1/Math.tan(eval(input.textContent)).toFixed(8).toString())
	}
}

function invert() {
	input.textContent = -eval(input.textContent)
}

function ms() {
    memory = parseFloat(input.textContent)
    return memory
}

function mr() {
	input.textContent = memory
}

function mc() {
    return memory = "0"
}

function madd() {
    const current = parseFloat(input.textContent)
    if (isNaN(memory) || memory == "") {
        console.error("Memory is empty")
    } else {
        history.textContent = current + "+" + memory
        let x = memory + current
        input.textContent = x
        clipboard.push(history.textContent)
        clipboard.push("= " + input.textContent + "\n")
    }
}

function msub() {
    const current = parseFloat(input.textContent)
    if (isNaN(memory) || memory == "") {
        console.error("Memory is empty")
    } else {
        history.textContent = current + "-" + memory
        let x = current - memory
        input.textContent = x
        clipboard.push(history.textContent)
        clipboard.push("= " + input.textContent + "\n")
    }
}

function conventer(){
	document.querySelector(".container").style = 'display: none'
	document.querySelector(".container_conv").style  = 'display: grid'
	document.querySelector(".conv").style = 'display: grid'

	length()	
}

function calc(){
	document.querySelector(".container_conv").style = 'display: none'
	document.querySelector(".container").style  = 'display: grid'
}

let convert_what = ''

function insert_c(num) {

	let insert_conv = document.querySelector('.insert_c')


	if (insert_conv.textContent.length === 26)
		return
	if(insert_conv.textContent == '0.'){
		insert_conv.textContent = "0." + num
		return
	}
	if(num === '.' && insert_conv.textContent == 0){
		insert_conv.textContent = "0."
		return
	}
	if(num === '.'){
		let number = insert_conv.textContent
		for (let i = number.length; i >= 0; i--){
			if(number[i] == '+' || number[i] == '-' || number[i] == '*' || number[i] == '/'){
				number = number.slice(i)
			}
		}
		if(number.includes('.'))
			return
	}
	if(insert_conv.textContent === 0){
		insert_conv.textContent = "0."
		return
	}
	if(insert_conv.textContent == 0 || insert_conv.textContent == 'Infinity' || insert_conv.textContent == '-Infinity') {
		insert_conv.textContent = ""
		insert_conv.textContent = insert_conv.textContent + num
	} else{
		if(insert_conv.textContent.slice(-1) == num && Number(isNaN(insert_conv.textContent.slice(-1))))
			return
		else insert_conv.textContent = insert_conv.textContent + num
	}

	 
	switch (convert_what){
		case 'kilometres':
			document.querySelector('.Metresc').textContent = insert_conv.textContent * 1000
			document.querySelector('.Centimetresc').textContent = insert_conv.textContent * 100000
			break
		case 'metres':
			document.querySelector('.Kilometresc').textContent = insert_conv.textContent/ 1000
			document.querySelector('.Centimetresc').textContent = insert_conv.textContent / 0.01
			break
		case 'centimetres':
			document.querySelector('.Kilometresc').textContent = insert_conv.textContent / 100000
			document.querySelector('.Metresc').textContent = insert_conv.textContent / 100
			break

		case 'grams':
			document.querySelector(".Tonsc").textContent = insert_conv.textContent / 1000000
			document.querySelector(".Kilogramsc").textContent = insert_conv.textContent / 1000
			document.querySelector(".Poundsc").textContent = insert_conv.textContent / 0.45359237
			break
		case 'tons':
			document.querySelector(".Gramsc").textContent = insert_conv.textContent * 1000000
			document.querySelector(".Kilogramsc").textContent = insert_conv.textContent * 1000
			document.querySelector(".Poundsc").textContent = insert_conv.textContent / 0.00045359237
			break
		case 'kilograms':
			document.querySelector(".Gramsc").textContent = insert_conv.textContent * 1000
			document.querySelector(".Poundsc").textContent = insert_conv.textContent * 2.205
			document.querySelector(".Tonsc").textContent = insert_conv.textContent / 1000
			break
		case 'pounds':	
			document.querySelector(".Kilogramsc").textContent = insert_conv.textContent / 2.2046
			document.querySelector(".Gramsc").textContent = insert_conv.textContent / 0.0022046
			document.querySelector(".Tonsc").textContent = insert_conv.textContent * 0.00045359237
			break
		case 'km':
			document.querySelector('.mc').textContent = insert_conv.textContent* 1000000
			document.querySelector('.acresc').textContent = insert_conv.textContent * 247.105381
			break
		case 'm':
			document.querySelector('.kmc').textContent = insert_conv.textContent / 1000000
			document.querySelector('.acresc').textContent = insert_conv.textContent * 0.000247
			break
		case 'acres':
			document.querySelector('.mc').textContent = insert_conv.textConten / 0.00024711
			document.querySelector('.kmc').textContent = insert_conv.textContent / 247.105381
			break
		}
}

function clear_c(){
	let i = document.querySelectorAll(".inc")
	for(let n of i)
		n.textContent = '0'
	
}

function metres(){
	
	clear_c()
	document.querySelector(".Metres").style = 'color: #ff8800'
	document.querySelector(".Centimetres").style = 'color: #999999'
	document.querySelector(".Kilometres").style = 'color: #999999'

	let i = document.querySelector(".insert_c")
	i.classList.remove("insert_c")
	
	let n = document.querySelector(".Metresc")
	n.classList.add("insert_c")
	convert_what = 'metres'
	
}

function centimetres(){
	clear_c()
	document.querySelector(".Metres").style = 'color: #999999'
	document.querySelector(".Kilometres").style = 'color: #999999'
	document.querySelector(".Centimetres").style = 'color: #ff8800'

	let i = document.querySelector(".insert_c")
	i.classList.remove("insert_c")
	let n = document.querySelector(".Centimetresc")
	n.classList.add("insert_c")

	convert_what = 'centimetres'
	
}

function kilometres(){
	clear_c()
	document.querySelector(".Centimetres").style = 'color: #999999'
	document.querySelector(".Kilometres").style = 'color: #ff8800'
	document.querySelector(".Metres").style = 'color: #999999'

	let i = document.querySelector(".insert_c")
	i.classList.remove("insert_c")
	
	let n = document.querySelector(".Kilometresc")
	n.classList.add("insert_c")
	
	convert_what = 'kilometres'
	

}

function length(){
	document.querySelector('div.length_c').style = 'display: grid'
	document.querySelector('div.area_c').style = 'display: none'
	document.querySelector('div.widht_c').style = 'display: none'

	document.querySelector(".Length").style = 'color: #ff8800'
	document.querySelector(".Weight").style = 'color: #434343'
	document.querySelector(".Area").style = 'color: #434343'

	let n = document.querySelector(".Metres")
	n.classList.add("insert_c")

	metres()
	
}

function weight(){
	document.querySelector(".insert_c").classList.remove("insert_c");
	document.querySelector('div.widht_c').style = 'display: grid'
	document.querySelector('div.area_c').style = 'display: none'
	document.querySelector('div.length_c').style = 'display: none'
	
	document.querySelector(".Weight").style = 'color: #ff8800'
	document.querySelector(".Length").style = 'color: #535353'
	document.querySelector(".Area").style = 'color: #535353'

	let n = document.querySelector(".Grams")
	n.classList.add("insert_c")

	grams()
}

function grams(){
	clear_c()
	document.querySelector(".Grams").style = 'color: #ff8800'
	document.querySelector(".Kilograms").style = 'color: #999999'
	document.querySelector(".Pounds").style = 'color: #999999'
	document.querySelector(".Tons").style = 'color: #999999'

	let i = document.querySelector(".insert_c")
	i.classList.remove("insert_c")
	
	let n = document.querySelector(".Gramsc")
	n.classList.add("insert_c")
	
	convert_what = 'grams'
}

function tons(){
	clear_c()
	document.querySelector(".Tons").style = 'color: #ff8800'
	document.querySelector(".Kilograms").style = 'color: #999999'
	document.querySelector(".Pounds").style = 'color: #999999'
	document.querySelector(".Grams").style = 'color: #999999'

	let i = document.querySelector(".insert_c")
	i.classList.remove("insert_c")
	
	let n = document.querySelector(".Tonsc")
	n.classList.add("insert_c")
	
	convert_what = 'tons'
}

function kilograms(){
	clear_c()
	document.querySelector(".Kilograms").style = 'color: #ff8800'
	document.querySelector(".Grams").style = 'color: #999999'
	document.querySelector(".Pounds").style = 'color: #999999'
	document.querySelector(".Tons").style = 'color: #999999'

	let i = document.querySelector(".insert_c")
	i.classList.remove("insert_c")
	
	let n = document.querySelector(".Kilogramsc")
	n.classList.add("insert_c")
	
	convert_what = 'kilograms'
}

function pounds(){
	clear_c()
	document.querySelector(".Pounds").style = 'color: #ff8800'
	document.querySelector(".Grams").style = 'color: #999999'
	document.querySelector(".Kilograms").style = 'color: #999999'
	document.querySelector(".Tons").style = 'color: #999999'
	let i = document.querySelector(".insert_c")
	i.classList.remove("insert_c")
	
	let n = document.querySelector(".Poundsc")
	n.classList.add("insert_c")
	
	convert_what = 'pounds'
}

function m(){
	clear_c()
	document.querySelector(".m").style = 'color: #ff8800'
	document.querySelector(".acres").style = 'color: #999999'
	document.querySelector(".km").style = 'color: #999999'

	let i = document.querySelector(".insert_c")
	i.classList.remove("insert_c")
	
	let n = document.querySelector(".mc")
	n.classList.add("insert_c")
	
	convert_what = 'm'
}

function km(){
	clear_c()
	document.querySelector(".m").style = 'color: #999999'
	document.querySelector(".acres").style = 'color: #999999'
	document.querySelector(".km").style = 'color: #ff8800'

	let i = document.querySelector(".insert_c")
	i.classList.remove("insert_c")
	
	let n = document.querySelector(".kmc")
	n.classList.add("insert_c")
	
	convert_what = 'km'
}

function acres(){
	clear_c()
	document.querySelector(".m").style = 'color: #999999'
	document.querySelector(".acres").style = 'color: #ff8800'
	document.querySelector(".km").style = 'color: #999999'

	let i = document.querySelector(".insert_c")
	i.classList.remove("insert_c")
	
	let n = document.querySelector(".acresc")
	n.classList.add("insert_c")
	
	convert_what = 'acres'
}

function area(){
	document.querySelector(".insert_c").classList.remove("insert_c");
	document.querySelector('div.area_c').style = 'display: grid'
	document.querySelector('div.widht_c').style = 'display: none'
	document.querySelector('div.length_c').style = 'display: none'
	
	document.querySelector(".Area").style = 'color: #ff8800'
	document.querySelector(".Length").style = 'color: #434343'
	document.querySelector(".Weight").style = 'color: #434343'
	let n = document.querySelector(".Grams")
	n.classList.add("insert_c")
	m()
}

function hex() {
	let inp = eval(input.textContent);
	let hex = inp.toString(16);
	input.textContent = String(hex.toUpperCase());
}

function bin() {
	let binar = parseInt(input.textContent);
	input.textContent = binar.toString(2);
}

function dec() {
	let dec = parseInt(input.textContent, 2)
	input.textContent = dec.toString(10)
}