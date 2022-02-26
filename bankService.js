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
  constructor(date, amount) {
    this.date = date;
    this.amount = amount;
  }
}

let balance = 0;
const statementHistory = new StatementHistory();

function doOperation(amount) {
  balance += amount;
  createStatementInHistory(amount);
  return balance;
}

function createStatementInHistory(amount) {
  const formattedDate = formatDate(new Date());
  const statement = new Statement(formattedDate, amount);
  statementHistory.addStatement(statement);
}

function deposit(amount) {
  return doOperation(+amount);
}

function withdrawal(amount) {
  return doOperation(-amount);
}

function printStatements() {
  return statementHistory.printStatements();
}

module.exports = { deposit, withdrawal, printStatements };