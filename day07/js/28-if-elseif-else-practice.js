const inputPriceE1 = document.querySelector("#inputPrice")
const resultE1 = document.getElementById("result")

function calculateDiscount() {
    let result = +inputPriceE1.value;

    if (result > 500) {
        result *= 0.9;
    } else if (result > 300) {
        result *= 0.93;
    } else {
        result *= 0.95;
    }

    resultE1.innerText = `RESULT: ${result}`;

}