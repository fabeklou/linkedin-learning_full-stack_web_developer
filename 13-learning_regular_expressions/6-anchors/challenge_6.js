const fs = require('fs');
let str = '';
let matchArr = [];

try {
    str = fs.readFileSync(process.argv[2], 'utf8');
} catch (err) {
    console.error(err);
    process.exit(1);
}

/**
 * A regex that finds paragraphs that starts with the letter `I` (standalone letter)
 *      Example: "I read"
 */
matchArr = str.match(/^I .*$/gm);
console.log(matchArr.length, matchArr);


/**
 * A regular expression that uses anchors to find how many paragraphs end with a question mark `?`
 *      Example: "Are you there ?"
*/
matchArr = str.match(/^.+\?$/gm);
console.log(matchArr.length, matchArr);

/**
 * A regex that matches 15 letters words, including hyphenated words
 *      Example: "pre-order" "tomato" "var_name" "Gamer89"
*/
matchArr = str.match(/\b[\w-]{15}\b/g);
console.log(matchArr.length, matchArr);
