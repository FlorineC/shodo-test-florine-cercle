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

module.exports = { StatementHistory };