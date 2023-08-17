const priceE1 = document.getElementById("salary");
const resultE1 = document.getElementById("result");

function calculatePrice() {
    let result = priceE1.value

    if (result > 500) {
        result *= 0.9;
    } else if (result > 300) {
        result *= 0.95;
    } else {
        result *= 0.98;
    }

    resultE1.innerText = `RESULT: ${result.toFixed(2)}`;
}