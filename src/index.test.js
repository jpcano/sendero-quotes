var expect = require('chai').expect;
var sendero = require('./index');

describe('sendero-quotes', function() {
    describe('all', function () {
        it('should be an array of strings', function() {
            expect(sendero.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function (item) {
                    return typeof item === 'string'
                });
            }
        });
    });

    describe('random', function(){
        it('should return a random item from sendero.all', function() {
            var randomItem = sendero.random();
            expect(sendero.all).to.include(randomItem);
        });

        it('should return an array of random items if passed an argument', function() {
            var randomItems = sendero.random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(function(item) {
                expect(sendero.all).to.include(item);
            });
        });
    });
});