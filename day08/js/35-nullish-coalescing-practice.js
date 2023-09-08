const heightEl  = document.querySelector("#number1");
const widthEl = document.querySelector("#number2");
const resultEl = document.querySelector("#result");

function calculateArea () {

    const height = undefined;
    const width = 200;
    const result = (height ?? 100)*(width ?? 100);
    console.log(result)
    resultEl.innerText = `RESULT: ${result}`

     // if (yukseklik === null || yukseklik === undefined) {
    //     yukseklik = 100;
    // }
    // if (genislik === null || genislik === undefined) {
    //     genislik = 100;
    // }
    // const result = yukseklik * genislik;
}