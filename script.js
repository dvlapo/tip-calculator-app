const numOfPeopleField = document.querySelector('.numberOfPeople');
const numOfPeopleInput = document.querySelector('.numberOfPeople input');
const noZero = document.querySelector('.noZero.noZero');

function validateInput() {
    if (numOfPeopleInput?.value) {
        noZero.style.display = 'none';
        numOfPeopleField.classList.remove('error-outline');
    } else if (numOfPeopleInput?.value == 0) {
        noZero.style.display = 'block';
        numOfPeopleField.classList.add('error-outline');
    }
}

numOfPeopleInput.addEventListener('input', validateInput);
