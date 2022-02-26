const { deposit, withdrawal, printStatements } = require('./bankService');
const { formatDate } = require('./dateUtils');

test('In a bank account without operations, the history of operations is empty', () => {
  expect(printStatements()).toStrictEqual([]);
});

test('when doing a deposit of 10€ on an empty account the balance equals 10€', () => {
  expect(deposit(10)).toBe(10);
});

test('when doing a withdrawal of 10€ on an account with 10€ balance, the balance equals 0€', () => {
  expect(withdrawal(10)).toBe(0);
});

test('When printing statements, each deposit is associated with the amount of the operation', () => {
  const deposit = printStatements()[0];
  expect(deposit.credit).toStrictEqual(10);
});

test('When printing statements, each withdrawal is associated with the amount of the operation', () => {
  const withdrawal = printStatements()[1];
  expect(withdrawal.debit).toStrictEqual(10);
});

test('When printing statements, each deposit is associated with a date', () => {
  const deposit = printStatements()[0];
  expect(deposit.date).toBe(formatDate(new Date()));
});

test('When printing statements, each withdrawal is associated with a date', () => {
  const withdrawal = printStatements()[1];
  expect(withdrawal.date).toBe(formatDate(new Date()));
});