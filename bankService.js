const { formatDate } = require('./dateUtils');
class StatementHistory {
  constructor() {
    this.statements = [];
  }

  addStatement(statement) {
    this.statements.push(statement);  
  }

  printStatements() {
    console.table(this.statements);
    return this.statements;
  }
}

class Statement {
  constructor(date, credit, debit) {
    this.date = date;
    this.credit = credit;
    this.debit = debit;
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
  const statement = new Statement(formattedDate, credit, debit);
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