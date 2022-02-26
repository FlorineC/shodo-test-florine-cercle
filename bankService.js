const { format } = require('date-fns');

class StatementHistory {
  constructor() {
    this.statements = [];
  }

  addStatement(amount, date) {
    this.statements.push({ amount, date });  
  }

  printStatements() {
    console.table(this.statements);
    return this.statements;
  }
}

let balance = 0;
const statementHistory = new StatementHistory();

function deposit(amount) {
  return doOperation(+amount);
}

function withdrawal(amount) {
  return doOperation(-amount);
}

function doOperation(amount) {
  balance += amount;
  statementHistory.addStatement(amount, formatDate(new Date()));
  return balance;
}

function formatDate(date) {
  return format(date, 'dd/MM/yyyy');
}

function printStatements() {
  return statementHistory.printStatements();
}

module.exports = { deposit, withdrawal, printStatements, formatDate };