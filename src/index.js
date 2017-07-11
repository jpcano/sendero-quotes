var uniqueRandomArray = require('unique-random-array')
var senderoQuotes = require('./sendero-quotes.json')
var getRandomItem = uniqueRandomArray(senderoQuotes)

module.exports = {
    all: senderoQuotes,
    random: random
};

function random(number) {
    if (number === undefined) {
        return getRandomItem();
    } else {
        var randomItems = []
        for (var i = 0; i < number; i++) {
            randomItems.push(getRandomItem());
        }
        return randomItems;
    }
}