var path = require('path');
var should = require('should');
var reqMock = require('../src/req-mock');

describe('#reqMock', () => {
    it('should override package with mock', () => {
        let mock = function MyMock() {};
        let pathToPackage = path.resolve('./tests/sample.package');

        let package = reqMock(pathToPackage, mock);

        should(require(pathToPackage)).be.equal(mock);
        should(package).be.equal(mock);
    });
});