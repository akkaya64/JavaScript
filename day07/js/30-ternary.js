let salary = 3000;

console.log(salary > 10000 ? "You'll live":"You'll not good");

console.log(salary > 30000
    ? "Good"
    : salary > 20000
    ? "so so"
    : salary > 10000
    ? "Not good"
    :"It's worse");

    salary > 30000
    ? console.log("good")
    :console.log("Bed");

    const salaryDeclaration = salary > 30000 ? "good" :"Not good";
    console.log(salaryDeclaration);

    const bodyE1 = document.querySelector("body");
    bodyE1.innerText = salaryDeclaration;