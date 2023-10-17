const getValues = () => {
    const userText = document.getElementById('userText').value;
    if (!validateInput(userText)) {
        displayError();
    } else {
        const reversedMessage = reverseMessage(userText);
        displayMessage(reversedMessage);
    }
}

const validateInput = input => {
    return input.length
}

const displayError = () => {
    Swal.fire({
        icon:"error",
        backdrop:false,
        title: "Oops!",
        text: "Please enter a message to reverse."
    })
}

const reverseMessage = (input) => {
    let reversedString = '';

    for (let i = input.length - 1; i >= 0; i--) {
        const letter = input[i]
        reversedString += letter;
    }

    return reversedString;
}

const displayMessage = (input) => {
    const alertBox = document.getElementById('alert');
    const msg = document.getElementById('msg');
    alertBox.classList.remove('invisible');
    msg.innerText = `Your message reversed is: ${input}`;
}