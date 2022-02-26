let balance = 0;
function deposit(amount) {
  balance += amount;
  return balance;
}
module.exports = { deposit };