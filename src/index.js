var uniqueRandomArray = require('unique-random-array')
var senderoQuotes = require('./senlidero-quotes.json')

module.exports = {
    all: senderoQuotes,
    random: uniqueRandomArray(senderoQuotes)
};