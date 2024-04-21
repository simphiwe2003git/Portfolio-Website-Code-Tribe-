function handleFormSubmit(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const surnameInput = document.getElementById("surname");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const isNameValid = nameInput.value.trim() !== '';
    const isSurnameValid = surnameInput.value.trim() !== '';
    const isEmailValid = emailInput.value.trim() !== '' && emailInput.validity.valid;
    const isMessageValid = messageInput.value.trim() !== '';

    const isFormValid = isNameValid && isSurnameValid && isEmailValid && isMessageValid;

    if (isFormValid) {
        const formData = new FormData(event.target);

        fetch('https://formspree.io/f/xyyrlpdq', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Email successfully sent');
            }
        });
    } else {
        if (!isNameValid) {
            document.getElementById('name-error').classList.remove('hidden');
        } else {
            document.getElementById('name-error').classList.add('hidden');
        }
        if (!isSurnameValid) {
            document.getElementById('surname-error').classList.remove('hidden');
        } else {
            document.getElementById('surname-error').classList.add('hidden');
        }
        if (!isEmailValid) {
            document.getElementById('email-error').classList.remove('hidden');
        } else {
            document.getElementById('email-error').classList.add('hidden');
        }
        if (!isMessageValid) {
            document.getElementById('message-error').classList.remove('hidden');
        } else {
            document.getElementById('message-error').classList.add('hidden');
        }
    }
}