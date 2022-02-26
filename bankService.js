let balance = 0;
const statements = [];

function deposit(amount) {
  balance += amount;
  return balance;
}

function withdrawal(amount) {
  balance -= amount;
  return balance;
}

function printStatements() {
  console.table(statements);
  return statements;
}

module.exports = { deposit, withdrawal, printStatements };