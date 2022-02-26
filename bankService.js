class StatementHistory {
  constructor() {
    this.statements = [];
  }

  printStatements() {
    console.table(this.statements);
    return this.statements;
  }
}

let balance = 0;
const statementHistory = new StatementHistory();

function deposit(amount) {
  balance += amount;
  return balance;
}

function withdrawal(amount) {
  balance -= amount;
  return balance;
}

function printStatements() {
  return statementHistory.printStatements();
}


module.exports = { deposit, withdrawal, printStatements };