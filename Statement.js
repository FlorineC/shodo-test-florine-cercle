class Statement {
  constructor(date, credit, debit, balance) {
    this.date = date;
    this.credit = toEuros(credit);
    this.debit = toEuros(debit);
    this.balance = toEuros(balance);
  }
}

function toEuros(number) {
  const floatNumber = parseFloat(number);
  if (isNaN(floatNumber)) {
    return null;
  }
  return `${floatNumber.toFixed(2)} €`;
}

module.exports = { Statement };