const salaryE1 = document.getElementById("salary");
const resultE1 = document.getElementById("result");

function setSalary() {
    const status = document.querySelector("input[name = 'status']:checked")
    ? document.querySelector("input[name = 'status']:checked").value
    :null;

    if (status) {
        let salary = salaryE1.value;
        salary = status === "retired" ? salary * 0.9 : salary * 0.95;
        resultE1.innerText = `Salary Calculated £${salary.toFixed(2)}`
    }
}