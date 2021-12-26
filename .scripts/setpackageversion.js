const fs = require( 'fs');
const pkg = require('../package.json');
const pkgLock = require('../package-lock.json');
const myArgs = process.argv.slice(2);

pkg.version = myArgs[0];
pkgLock.version = myArgs[0];
pkgLock.packages[""].version = myArgs[0]
fs.writeFileSync('./package.json', JSON.stringify(pkg, null, '\t'));
fs.writeFileSync('./package-lock.json', JSON.stringify(pkgLock, null, '\t'));