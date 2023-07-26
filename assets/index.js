
class FormHandler {
    async validateForm() {
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const age = document.getElementById('age').value;
        const country = document.getElementById('country').value;
        const picture = document.getElementById('picture').files[0];

        // Check if any field is empty
        if (!firstname || !lastname || !age || !country || !picture) {
            return false;
        }

        // Additional validation can be added here if needed

        return true;
    }
}

async function handleSubmit(event) {
    event.preventDefault();

    const formHandler = new FormHandler();
    const isValid = await formHandler.validateForm();

    if (isValid) {
        // Submit the form or do further processing here
        console.log('Form is valid. Submitting...');
        document.getElementById('form').submit(); // Replace this with your desired action
    } else {
        alert('Please fill in all the required fields.');
    }
}

