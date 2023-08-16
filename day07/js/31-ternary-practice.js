const salaryE1 = document.querySelector("#salary")
const resultE1 = document.querySelector("#result")

function setSalary() {
    const status = document.querySelector("input[name = 'status']:checked")
    ? document.querySelector("input[name = 'status']:checked").value
    : null;

    if (status) {
        let salary = salaryE1.value;
        salary = status === "retired" ? salary * 0.9 : salary*0.95;
        resultE1.innerText = `Salary calculated £${salary.toFixed(2)}`
    }
}