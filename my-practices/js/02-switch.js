const priceE1 = document.getElementById("price");
const resultE1 = document.getElementById("result");

function setPrice() {
  let result = priceE1.value;
  let discount;

  /* switch (true) {
    case result >= 1500:
      discount = 15;
      break;
    case result >= 1000:
      discount = 13;
      break;
    case result >= 700:
      discount = 10;
      break;
    case result >= 500:
      discount = 7;
      break;
    case result >= 300:
      discount = 5;
      break;
    default:
      discount = 2;
  } */

  //VERSION -2
  /* if (result >= 1500) {
    discount = 15;
  } else if (result >= 1000) {
    discount = 13;
  } else if (result >= 700) {
    discount = 10;
  } else if (result >= 500) {
    discount = 7;
  } else if (result >= 300) {
    discount = 5;
  } else {
    discount = 2;
  } */

  //VERSION -3 CASELER DEKI DEGERLER ICIN DISCOUNT UYGULANIR
  /* switch (result) {
    case 1500:
      discount = 15;
      break;
    case 1000:
      discount = 13;
      break;
    case 700:
      discount = 10;
      break;
    case 500:
      discount = 7;
      break;
    case 300:
      discount = 5;
      break;
    default:
      discount = 2;
  } */


  //VERSION -4  VERSION -3' UN AYNISI  SWITCH DAHA OKUNABILIR
  if (result === 1500) {
    discount = 15;
  } else if (result === 1000) {
    discount = 13;
  } else if (result === 700) {
    discount = 10;
  } else if (result === 500) {
    discount = 7;
  } else if (result === 300) {
    discount = 5;
  } else {
    discount = 2;
  }


  result -= (result * discount) / 100;
  resultE1.innerText = `RESULT: £${result.toFixed(2)}`;
  resultE1.value = "";
}
