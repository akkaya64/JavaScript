console.log(document);

const h1E1 = document.querySelector("h1");
console.log(h1E1);

const aboutUsE1 = document.querySelector("#aboutUs");
console.log(aboutUsE1)

const spanE1 = document.querySelector('#aboutUs span');
console.log(spanE1)

const menuE1 = document.querySelector("ul.menu");
console.log(menuE1);

const menuItem3 =document.querySelector("ul.menu li:nth-child(3)");
console.log(menuItem3)

const menuAllE1 = document.querySelectorAll(".menu")
console.log(menuAllE1)

console.log(h1E1.innerText)
console.log(h1E1.innerHTML)

h1E1.innerText = "<span>Hello</span>";
h1E1.innerHTML = '<span style="color:crimson">Hello</span>';

console.log(h1E1)

menuItem3.innerText = "Yeni Icerik";
const menuItem3Text = menuItem3.innerText;

// VERSION 01
console.log(document.querySelector('ul.menu li:last-child').innerText = document.querySelector('ul.menu li:last-child').innerText + " " + menuItem3Text)

// VERSION 02
console.log(document.querySelector('ul.menu li:last-child').innerText += " " + menuItem3Text)

// VERSION 03
console.log(document.querySelector('ul.menu li:last-child').innerText += ` ${menuItem3Text}`) 

document.querySelector('ul.menu li:nth-child(4)').innerHTML = '<b>Hello World</b>'