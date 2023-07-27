class Form {
    async validate() {
      const firstname = document.querySelector('.firstname').value;
      const lastname = document.querySelector('.lastname').value;
      const age = document.querySelector('.age').value;
      const country = document.querySelector('.country').value;
      const picture = document.querySelector('.picture').value;

      if (firstname === '' || lastname === '' || age === '' || country === '' || picture === '') {
        alert('Fields are empty');
        return false; // Return false if the form is invalid
      }

      return true; // Return true if the form is valid
    }

    sentence() {
      const firstname = document.querySelector('.firstname').value;
      const lastname = document.querySelector('.lastname').value;
      const age = document.querySelector('.age').value;
      const country = document.querySelector('.country').value;
      const picture = document.querySelector('.picture').value;

      alert(`My name is ${firstname} ${lastname}. I am from ${country}. I am ${age} years old`);
    }
  }

  const submitBtn = document.querySelector('.submit-btn');
  const newForm = new Form();

  submitBtn.addEventListener('click', async function (event) {
    event.preventDefault();
    const isValid = await newForm.validate();

    if (isValid) {
      newForm.sentence();
    } else {
      alert('Please fill in all the required fields.');
    }
  });
