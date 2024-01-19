const fs  = require('fs');
let str = '';
let matchArr = [];

try {
    str = fs.readFileSync(process.argv[2], 'utf8');
} catch (err) {
    console.error(err);
    process.exit(0);
}

/**
 * A regex that uses grouping and alternation to match:
 *      myself, yourself, thyself  <but not>
 *      himself, herself, itself
 */
matchArr = str.match(/(my|your|thy)self/g);
console.log(matchArr.length);
console.log(matchArr);

/**
 * A regex that uses grouping ad alternation to match:
 *      good, goodness and goods
*/
matchArr = str.match(/good(ness|s)?/g);
console.log(matchArr.length);
console.log(matchArr);

/**
 * A regex that uses grouping and alternation to match:
 *      do or does     followed by
 *      no, not or nothing
 * even when it occurs at the start of the sentence
*/
matchArr = str.match(/[Dd]o(es)? no(thing|t)?/g);
console.log(matchArr.length);
console.log(matchArr);
