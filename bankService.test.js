const { deposit, withdrawal } = require('./bankService');

test('when making a deposit of 10€ on an empty account the balance equals 10€', () => {
  expect(deposit(10)).toBe(10);
});

test('when making a withdrawal of 10€ on an account with 10€ balance, the balance equals 0€', () => {
  expect(withdrawal(10)).toBe(0);
});