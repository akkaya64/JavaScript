const nameInputE1 = document.querySelector('#nameInput');

console.log(nameInputE1.value);

const paragraphE1 = document.querySelector('#content');
console.log(paragraphE1);

paragraphE1.innerHTML = `
<strong>
<em>
My name is: ${nameInputE1.value}
</em>
</strong>
`