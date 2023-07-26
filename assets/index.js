const form = document.getElementById('form');
let submitBtn = document.querySelector('.submit-btn');

class Form {
    constructor(firstname, lastname, age, country, picture) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.country = country;
        this.picture = picture;
    }

    async validate() {

        let firstname = document.querySelector('.firstname').value;
        let lastname = document.querySelector('.lastname').value;
        let age = document.querySelector('.age').value;
        let country = document.querySelector('.country').value;
        let picture = document.querySelector('.picture').value;

        if (firstname === '' || lastname === '' || age === '' || country === '' || picture === '') {
            alert('Fields are empty')
        }
    }

    sentence() {

        let firstname = document.querySelector('.firstname').value;
        let lastname = document.querySelector('.lastname').value;
        let age = document.querySelector('.age').value;
        let country = document.querySelector('.country').value;
        let picture = document.querySelector('.picture').value;

        alert(`My name is ${firstname} ${lastname}. I am from ${country}. I am ${age} years old`);
    }
}

const newForms = new Form(firstname, lastname, age, country, picture);

submitBtn.addEventListener('click', async function (event) {
    event.preventDefault;
    const isValid = await Form.validate();

    if (isValid) {
        return newForms.sentence();
    } else {
        alert('Please fill in all the required fields.');
    }
});