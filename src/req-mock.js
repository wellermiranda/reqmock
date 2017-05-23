const path = require('path');

module.exports = function(pathToPackage, mock) {
    let pathResolved = path.resolve(pathToPackage);
    require(pathResolved);
    return require.cache[pathResolved + '.js'].exports = mock;
};