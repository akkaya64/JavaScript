console.log("first");

const x = 5;
const y = 4;
const z = 14;

console.log(y > x && z > y && y != 4);
console.log(x > y && "Burasi gorunur oldu");
console.log(y > x && z);
console.log(x > y && z > y && y);
console.log(x > y && x && y);

const a = 5;
const b = 0;
console.log(a > b && b > 5 && a) // 


if (a > b && b < 1 && a > 4) {
    console.log("Tum seneryolar tuttu")
}
// ASAGIDAKI YUKARIDAKININ AYNISI
(a > b && b < 1 && a > 4) && console.log("Tum seneryolar tuttu")


// z > 5 && z < 25 && alert("z, 5 ile 25 arasinda bir sayi");

const kullaniciSayisi = 0;
const sayi = kullaniciSayisi || "Kullanici sayisi bulunamadi"
console.log(sayi)

//SENARYO 1
const isLoginIn = true;
const userName = "";

(isLoginIn || userName) && console.log("Kullanici Giris Yapti")

//SENARYO 2
const username = "fatih";
const password = "1234";

const girisDrumu = username === "fatih" && password === "1234" && "Giris basarili";

console.log(girisDrumu)
