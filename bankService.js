const { formatDate } = require('./dateUtils');
class StatementHistory {
  constructor() {
    this.statements = [];
  }

  addStatement(statement) {
    this.statements.unshift(statement);  
  }

  printStatements() {
    console.table(this.statements);
    return this.statements;
  }
}

class Statement {
  constructor(date, credit, debit, balance) {
    this.date = date;
    this.credit = this.toEuros(credit);
    this.debit = this.toEuros(debit);
    this.balance = this.toEuros(balance);
  }

  toEuros(number) {
    return `${Number(number).toFixed(2)} €`;
  }
}

let balance = 0;
const statementHistory = new StatementHistory();

function doOperation(credit, debit) {
  balance = balance + credit - debit;
  createStatementInHistory(credit, debit);
  return balance;
}

function createStatementInHistory(credit, debit) {
  const formattedDate = formatDate(new Date());
  const statement = new Statement(formattedDate, credit, debit, balance);
  statementHistory.addStatement(statement);
}

function deposit(amount) {
  return doOperation(amount, 0);
}

function withdrawal(amount) {
  return doOperation(0, amount);
}

function printStatements() {
  return statementHistory.printStatements();
}

module.exports = { deposit, withdrawal, printStatements };