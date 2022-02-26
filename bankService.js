const { formatDate } = require('./utils');
const { StatementHistory } = require('./StatementHistory');
const { Statement } = require('./Statement');


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
  return doOperation(amount, null);
}

function withdrawal(amount) {
  return doOperation(null, amount);
}

function printStatements() {
  return statementHistory.printStatements();
}

module.exports = { deposit, withdrawal, printStatements };