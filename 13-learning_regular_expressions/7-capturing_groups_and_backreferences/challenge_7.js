const fs = require('fs');
let str = '';
let newStr = '';

try {
    /* Reading the content of the file us_president.csv file async */
    str = fs.readFileSync(process.argv[2], 'utf8');
} catch (err) {
    /* Throw an error message if file reading fails and exit */
    console.error(err);
    process.exit(1);
}

/**
 * exercise file: us_presidents.csv (contain a list of U.S. Presidents
 *      as comma-separated values)
 * 
 * regex tools to use: captures, backreferences, find-and-replace
 * 
 * output: strat-end full name
 */
newStr = str.replace(/^\d+,(.*?),(\d*?),(\d*?),.+$/gm, "$2 - $3: $1");
console.log(newStr);

/* other solution */
// newStr = str.replace(/^\d+,(.+?),(\d{4}),(\d{0,4}),.+,.+,https:.+$/gm, "$2 - $3: $1");
// console.log(newStr);
