const { format } = require('date-fns');

function formatDate(date) {
  return format(date, 'dd/MM/yyyy');
}

module.exports = { formatDate };