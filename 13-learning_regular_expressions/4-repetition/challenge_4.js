const fs =  require('fs');
let str = '';
let matchArr = [];

try {
    str = fs.readFileSync(process.argv[2], 'utf8');
} catch(err) {
    console.error(err);
    process.exit(0);
}

/**
 * A regex that match: self, himself, herself, itself, myself, yourself, thyself
 */
matchArr = str.match(/\w*?self/g);
console.log(matchArr);

/**
 * A regex that match both: virtue and virtues
*/
matchArr = str.match(/virtue[s]?/g);
console.log(matchArr);

/**
 * A regex that uses quantified repetition to find the word that starts with the
 * letter `T` and is 12 letters long
*/
matchArr = str.match(/T\w{11}/g);
console.log(matchArr);

/**
 * A regex that finds and returns a list of quoted text
*/
matchArr = str.match(/"(.|\n)+?"/g);
console.log(matchArr);
