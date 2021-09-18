const num1El = document.getElementById('num1');
const num2El = document.getElementById('num2');
const addEl = document.getElementById('add');
const substractEl = document.getElementById('substract');
const multiplyEl = document.getElementById('multiply');
const divideEl = document.getElementById('divide');
const resultEl = document.getElementById('result')

//AddEventListeners
addEl.addEventListener('click', (e) => {
  const num1 =  Number.parseInt(num1El.value);
  const num2 =  Number.parseInt(num2El.value);
let result = add(num1,num2);

if(Number.isNaN(result)) {
  resultEl.innerHTML = "Por favor introduce un numero";
} else {
resultEl.innerHTML = result;
}
})
substractEl.addEventListener('click', (e) => {
  const num1 =  Number.parseInt(num1El.value);
  const num2 =  Number.parseInt(num2El.value);
let result = substract(num1,num2);

if(Number.isNaN(result)) {
  resultEl.innerHTML = "Por favor introduce un numero";
} else {
resultEl.innerHTML = result;
}
})
multiplyEl.addEventListener('click', (e) => {
  const num1 =  Number.parseInt(num1El.value);
  const num2 =  Number.parseInt(num2El.value);
let result = multiply(num1,num2);
if(Number.isNaN(result)) {
  resultEl.innerHTML = "Por favor introduce un numero";
} else {
resultEl.innerHTML = result;
}
})
divideEl.addEventListener('click', (e) => {
  const num1 =  Number.parseInt(num1El.value);
  const num2 =  Number.parseInt(num2El.value);
let result = divide(num1,num2);
if(Number.isNaN(result)) {
  resultEl.innerHTML = "Por favor introduce un numero";
} else {
resultEl.innerHTML = result;
}
})

//functiones
function add (n1, n2) {
  return n1 + n2;
}

function substract(n1, n2) {
  return n1 - n2;
}
function multiply(n1, n2) {
  return n1 * n2;
}
function divide(n1, n2) {
  return n1 / n2;
}
