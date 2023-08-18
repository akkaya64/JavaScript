let kullaniciMaasi;
console.log(typeof kullaniciMaasi)

// VR - 1 
const maas = kullaniciMaasi ?? 30000;
console.log(maas)

//VR - 2
const maas2 = kullaniciMaasi !== null && kullaniciMaasi !== undefined 
? kullaniciMaasi 
: 30001;

console.log(maas2)

// VR - 3
let maas3;
if (kullaniciMaasi !== null && kullaniciMaasi !== undefined) {
    maas3 = kullaniciMaasi
} else {
    maas3 = 30002;
}
console.log(maas3)