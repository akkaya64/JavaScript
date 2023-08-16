// VERSION 1
/* function sum() {
  const num1 = document.querySelector("#num1").value;
  const num2 = document.querySelector("#num2").value;
  const resultE1 = document.querySelector("#total");

  // const sum = Number(num1) + Number(num2)
  const sum = +num1 + +num2;
  console.log(sum);

  resultE1.innerText = `Toplam: ${ sum}`;
  
} */


//VERSION 2 (toplama islemi yaptiktan sonra kutulardaki degerleri sifirliyor)

const inputNum1 = document.querySelector('#num1')
const inputNum2 = document.querySelector('#num2')
const resultE1 = document.querySelector('#total')

function sum() {
    const sum = +inputNum1.value + +inputNum2.value
    resultE1.innerText =`Total: ${sum}`;
    inputNum1.value = "";
    inputNum2.value = "";
}


