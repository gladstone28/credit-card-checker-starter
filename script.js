const cardInput = document.getElementById('card-input');
const validateBtn = document.getElementById('validate-btn');
const outputDiv = document.getElementById('output');

validateBtn.addEventListener('click', function() {
  const cardNumber = cardInput.value.split('').map(Number);
  const isValid = validateCred(cardNumber);
  if (isValid) {
    outputDiv.innerHTML = 'Your credit card number is valid.';
    outputDiv.style.color = 'green';
  } else {
    outputDiv.innerHTML = 'Your credit card number is invalid.';
    outputDiv.style.color = 'red';
  }
  outputDiv.style.display = 'block';
});
