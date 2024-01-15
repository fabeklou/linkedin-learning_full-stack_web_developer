const fs = require('fs');
let str = '';

try {
    str = fs.readFileSync(process.argv[2], 'utf8');
} catch (err) {
    process.stdout.write(err);
    process.exit(1);
}

console.log('the word self appears ' +
    str.match(/self/gi).length +
    ' times');

console.log('the words ...self appears ' +
    str.match(/\w+self/gi).length +
    ' times');

console.log('the words please, palace and parade appears ' +
    str.match(/p..a.e/gi).length +
    ' times');
