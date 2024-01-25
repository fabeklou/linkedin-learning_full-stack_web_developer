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
 * A regex expression that match the line for every
 *      U.S. President (will be used as starting
 *      point for other expressions)
 */
matchArr = str.match(/^\d+,\w+(?:\s+[A-Z]\.){0,2}\s+\w+(?:\s+\w+)?,\d{4},(\d{4})?,[\w\-\s\/]+,[a-zA-Z\s]+,https:.*$/gm);
if (matchArr)
    console.log(matchArr.length, matchArr);
else
    console.log("No Match!!!")

/**
 * A regex that match only line for U.S. President
 *      whose home state was not Virginia or
 *      Massachusetts 
 */
matchArr = str.match(/^\d+,\w+(?:\s+[A-Z]\.){0,2}\s+\w+(?:\s+\w+)?,\d{4},(\d{4})?,[\w\-\s\/]+,(?!Virginia|Massachusetts)[a-zA-Z\s]+?,https:.*$/gm);
if (matchArr)
    console.log(matchArr.length, matchArr);
else
    console.log("No Match!!!")

/**
 * A regex that match only line for U.S. President
 *      whose last name is longer that 7 characters
 */
matchArr = str.match(/^\d+,\w+(?:\s+[A-Z]\.){0,2}(?:\s+\w+)?\s+\w{8,},\d{4},(\d{4})?,[\w\-\s\/]+,[a-zA-Z\s]+?,https:.*$/gm);
if (matchArr)
    console.log(matchArr.length, matchArr);
else
    console.log("No Match!!!")

/**
 * A regex that match only line for U.S. President
 *      whose name does not include a middle initial
 */
matchArr = str.match(/^\d+,\w+(?:\s+[A-Z]\.){0}(?:\s+\w+)?\s+\w+,\d{4},(\d{4})?,[\w\-\s\/]+,[a-zA-Z\s]+?,https:.*$/gm);
if (matchArr)
    console.log(matchArr.length, matchArr);
else
    console.log("No Match!!!")

/**
 * A regex that match only line for U.S. President
 *      whose term in office began on or after 1900
 */
matchArr = str.match(/^\d+,\w+(?:\s+[A-Z]\.){0,2}(?:\s+\w+)?\s+\w+,(?=19[0-9]{2}|2[0-9]{3})\d{4},(\d{4})?,[\w\-\s\/]+,[a-zA-Z\s]+?,https:.*$/gm);
if (matchArr)
    console.log(matchArr.length, matchArr);
else
    console.log("No Match!!!")

/**
 * A regex that match the line for only U.S. President
 *      which meets all the preceding conditions
 */
matchArr = str.match(/^\d+,\w+(?:\s+[A-Z]\.){0}(?:\s+\w+)?\s+\w{8,},(?=19[0-9]{2}|2[0-9]{3})\d{4},(\d{4})?,[\w\-\s\/]+,(?!Virginia|Massachusetts)[a-zA-Z\s]+?,https:.*$/gm);
if (matchArr)
    console.log(matchArr.length, matchArr);
else
    console.log("No Match!!!")
