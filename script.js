const numOfPeopleField = document.querySelector('.numberOfPeople');

const numOfPeopleInput = document.querySelector('#number');
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

// bill calculation
const bill = document.querySelector('#bill');

let sharedBill = null;
function calculateSharedBill() {
    sharedBill = bill.value / numOfPeopleInput.value;
}

// tip calculation
const inputs = document.querySelectorAll('.tip-buttons input');
let tipPercent;

inputs.forEach((btn) => {
    btn.addEventListener('click', () => {
        // remove class selected from each btn first
        inputs.forEach((b) => b.classList.remove('selected'));

        // multiply attr by 1 to convert it to a number and set tipPercent to that value
        tipPercent = btn.getAttribute('data-val') * 1;

        btn.classList.add('selected');
    });
    btn.addEventListener('input', (e) => {
        tipPercent = e.target.value * 1;
    });
});

const tipAmountEl = document.querySelector('#tip-amount');
const totalEl = document.querySelector('#total');
const resetBtn = document.querySelector('#reset-btn');

numOfPeopleInput.addEventListener('input', () => {
    if (bill.value && numOfPeopleInput.value && tipPercent) {
        calculateSharedBill();

        let tipPerPerson = (tipPercent * 0.01 * sharedBill).toFixed(2);

        // Update ui
        const totalPerPerson = (sharedBill * 1 + tipPerPerson * 1).toFixed(2);

        tipAmountEl.textContent = tipPerPerson;
        totalEl.textContent = totalPerPerson;
        resetBtn.classList.add('active');
    }
});

resetBtn.addEventListener('click', () => {
    tipAmountEl.textContent = '0.00';
    totalEl.textContent = '0.00';
    resetBtn.classList.remove('active');
});
