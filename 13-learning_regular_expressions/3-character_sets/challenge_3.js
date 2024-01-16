const fs = require('fs');
let str = '';
let matchArr;

try {
    str = fs.readFileSync(process.argv[2], 'utf8');
} catch (err) {
    console.log(err);
    sys.exit(1);
}

/**
 * A regex that matches both the words `lives` and `lived`
 */
matchArr = str.match(/live[sd]/g);
console.log(matchArr);

/**
 * A regex that matches `virtue` but not `virtues`
 */
matchArr = str.match(/virtue[^s]/g);
console.log(matchArr);

/**
 * A regex that match the numbers and periods on all numbered paragraphs
*/
matchArr = str.match(/\d\./g);
console.log(matchArr);

/**
 * A regex that finds the 16-character word that starts with `c`
*/
matchArr = str.match(/c\w\w\w\w\w\w\w\w\w\w\w\w\w\w\w/g);
console.log(matchArr);
