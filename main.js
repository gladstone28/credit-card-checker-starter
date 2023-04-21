// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
function validateCred(arr) { //This is the start of the 'validateCred' function, which takes an array 'arr'as input

  let sum = 0;
  let double = false;
//This creates two variables sum and double and initializes them to 0 and false, respectively.
  for (let i = arr.length - 1; i >= 0; i--) { //This starts a for loop that iterates over the elements of arr in reverse order, starting from the last element.


    let num = arr[i];
//This creates a new variable num and assigns it the value of the current element in the loop.


   if (double) {
      num *= 2;
      if (num > 9) {
        num -= 9;
      }
    }
//This if block checks whether double is true. If it is, num is doubled and, if the result is greater than 9, 9 is subtracted from it. This is a common operation in credit card validation algorithms.

    sum += num;
    double = !double;
  }
//This adds num to sum and toggles the value of double to alternate between doubling and not doubling the next number in the array.

  return sum % 10 === 0;
//This ends the for loop and returns true if sum is a multiple of 10 (i.e., the credit card number is valid) and false otherwise.


}


function findInvalidCards(cards) { //This starts the findInvalidCards function, which takes an array cards as input.


  const invalidCards = [];
//This creates an empty array invalidCards.

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    if (!validateCred(card)) {
      invalidCards.push(card);
    }
  }
// This loops over the elements of cards, assigning the current element to the variable card. It then calls the validateCred function on card and, if the result is false, adds card to the invalidCards array.

  return invalidCards;
//This ends the for loop and returns the invalidCards array containing all invalid credit card numbers.

}

function idInvalidCardCompanies(invalidCards) {
  const companies = [];
  for (let i = 0; i < invalidCards.length; i++) {
    let firstDigit = invalidCards[i][0];
    switch (firstDigit) {
      case 3:
        if (companies.indexOf('Amex') === -1) {
          companies.push('Amex');
        }
        break;
      case 4:
        if (companies.indexOf('Visa') === -1) {
          companies.push('Visa');
        }
        break;
      case 5:
        if (companies.indexOf('Mastercard') === -1) {
          companies.push('Mastercard');
        }
        break;
      case 6:
        if (companies.indexOf('Discover') === -1) {
          companies.push('Discover');
        }
        break;
      default:
        console.log('Company not found');
    }
  }
  return companies;
}

console.log(idInvalidCardCompanies([invalid1])); // Should print['visa']
console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']
console.log(idInvalidCardCompanies(batch)); // Find out which companies have mailed out invalid cards






