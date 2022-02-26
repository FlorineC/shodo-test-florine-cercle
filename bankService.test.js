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
  const deposit = printStatements()[1];
  expect(deposit.credit).toStrictEqual('10.00 €');
});

test('When printing statements, each withdrawal is associated with the amount of the operation', () => {
  const withdrawal = printStatements()[0];
  expect(withdrawal.debit).toStrictEqual('10.00 €');
});

test('When printing statements, each deposit is associated with a date', () => {
  const deposit = printStatements()[1];
  expect(deposit.date).toBe(formatDate(new Date()));
});

test('When printing statements, each withdrawal is associated with a date', () => {
  const withdrawal = printStatements()[0];
  expect(withdrawal.date).toBe(formatDate(new Date()));
});

test('When printing statements, each deposit is associated with the account balance', () => {
  const deposit = printStatements()[1];
  expect(deposit.balance).toBe('10.00 €');
});

test('When printing statements, each withdrawal is associated with the account balance', () => {
  const withdrawal = printStatements()[0];
  expect(withdrawal.balance).toBe('0.00 €');
});

test('Scenario of the file given by Thomas', () => {
  expect(deposit(1000)).toBe(1000);
  expect(deposit(2000)).toBe(3000);
  expect(withdrawal(500)).toBe(2500);
  
  const [withdrawal1, deposit2, deposit1, ...rest] = printStatements();
  
  expect(deposit1.credit).toBe('1000.00 €');
  expect(deposit1.debit).toBeNull();
  expect(deposit1.balance).toBe('1000.00 €');

  expect(deposit2.credit).toBe('2000.00 €');
  expect(deposit2.debit).toBeNull();
  expect(deposit2.balance).toBe('3000.00 €');

  expect(withdrawal1.credit).toBeNull();
  expect(withdrawal1.debit).toBe('500.00 €');
  expect(withdrawal1.balance).toBe('2500.00 €');
})