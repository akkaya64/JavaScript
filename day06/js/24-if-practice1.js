/* 

1 - sayfada bir input olacak
2 - inputa bir fiyat bilgisi girilecek
3 - inputun yaninda bir buton olacak ve bu butona tiklandiginda asagidaki fonksiyonu calistiracak
4 - fiyat bilgisi 500'den buyukse 10% indirim uygulayan degilse de herhangi bir degisiklik yapmayan fonksiyon yazilacak
5 - ciktiyi sayfada bir elementin icerisinde gosterecek

*/


function calculate() {
    const priceE1 = document.querySelector('#price');
    const discountedPriceE1 = document.querySelector('#discauntedPrice');

    let price = priceE1.value;

    if (price > 500) {
        price *= 0.9;
        // price = price - (price * 10/100);
        // price -= price * 10/100;
        // price -= price * 0.1;
    }
    price = price.toFixed(2);
    discountedPriceE1.innerText = `DISCOUNTED PRICE: ${price}`

    // clear
    priceE1.value = "";
}