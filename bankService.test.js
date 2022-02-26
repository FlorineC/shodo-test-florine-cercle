const { deposit, withdrawal, printStatements } = require('./bankService');

test('In a bank account without operations, the history of operations is empty', () => {
  expect(printStatements()).toStrictEqual([]);
});

test('when doing a deposit of 10€ on an empty account the balance equals 10€', () => {
  expect(deposit(10)).toBe(10);
});

test('when doing a withdrawal of 10€ on an account with 10€ balance, the balance equals 0€', () => {
  expect(withdrawal(10)).toBe(0);
});
