const { deposit } = require('./bankService');
test('when making a deposit of 10€ on an empty account the balance equals 10€', () => {
  expect(deposit(10)).toBe(10);
});
