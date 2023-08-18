const user1 = {
    name: 'John',
    age: 30,
    salary: {
        amount: 30000,
        currency: '£',
    }
};

const user2 = {
    name: 'Jane',
    age: 25,
    salary: {
        amount: 50000,
        currency: '£',
        tax: {
            total: 500,
        }
    },
    addresses: {
        postcode: "MK5 7HE"
    }
};

console.log(user1);
console.log(user1.name);
console.log(user1.salary.tax);
console.log(user1.salary.tax?.total);

console.log(user2);
console.log(user2.salary);
console.log(user2.salary.tax.rate?.value.Ali.Osman);

console.log(user1.salary.tax?.rate?.value + " user1")
console.log(user2.salary.tax?.rate?.value + " user2")

/* console.log(user1);
console.log(user1.age);
console.log(user1.salary.amount);
console.log(user1.addresses?.city.street); */

