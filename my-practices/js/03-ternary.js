let salary = 30000;

console.log(salary > 10000 ? "Thats Good" : "Not good for you");

console.log(salary > 30000 
    ? "Awesome"
    : salary > 20000
    ? "Goood"
    : salary > 10000
    ? "SO SO"
    : "Not Good");

salary > 30000
? console.log("awesome")
: console.log("NOT GOOD")

const salaryDeclaration = salary > 29999 
? "AvesomeBRO"
: "NOTGOODBRO";
console.log(salaryDeclaration)

const writeOnBodyE1 = document.querySelector("body");
writeOnBodyE1.innerText = salaryDeclaration;