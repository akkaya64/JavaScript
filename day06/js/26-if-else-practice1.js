/*

1 - sayfada bir input ve bir buton olacak
2 - input kullanicidan fiyat bilgisi alacak
3 - butona tiklandiginda fiyat bilgisine indirim uygulayacak bir fonksiyon calistirilacak
4 - indirim fonksiyonu, girilen fiyatin 500'un uzerinde olmasi durumunda 10%, diger durumlarda 5%'lik bir indirim uygulayacak
5 - cikan sonucu sayfa icerisinde bir elementin icine yazdiracak

*/

function calculateDiscount() {
    const priceE1 = document.querySelector('#price');
    const discountedPriceE1 =document.querySelector("#discountedPrice")

    let price = priceE1.value;
    
    if (price < 500) {
        price *= 0.95;
    } else {
        price *= 0.9;
    }

    price = price.toFixed(2);
    
    discountedPriceE1.innerText = `NEW PRICE: ${price}`;

    priceE1.value = "";
}