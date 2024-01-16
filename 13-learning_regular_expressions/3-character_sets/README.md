# Character Sets
```
  _____  _                                _                 ___   _____        _         ___ 
 / ____|| |                              | |               |  _| / ____|      | |       |_  |
| |     | |__    __ _  _ __   __ _   ___ | |_   ___  _ __  | |  | (___    ___ | |_  ___   | |
| |     | '_ \  / _` || '__| / _` | / __|| __| / _ \| '__| | |   \___ \  / _ \| __|/ __|  | |
| |____ | | | || (_| || |   | (_| || (__ | |_ |  __/| |    | |   ____) ||  __/| |_ \__ \  | |
 \_____||_| |_| \__,_||_|    \__,_| \___| \__| \___||_|    | |_ |_____/  \___| \__||___/ _| |
                                                           |___|                        |___|
                                                                                             

```
## Define a character set

A character set defines a set of characters from which a match should be considered.

The list is determined by a pair of square brackets `[]`, representing the beginning and the end of the character set.

While using a character set, it is important to remember that it only matches a single character, even though his syntax may not seem.

**Example**: the character set `[abc]` will only match one and only one charcter in the square bracket. likewise, the pattern `p[eao]t` will match `pet`, `pot` and `pat` but
not `peat`.

Character set can be used to match anything from digits, `0123456789` to punctuations `;,."` and their order does not matter.

## Character ranges

Similar to character sets, character ranges represent a group of characters from which a match should be considered. But instead of specifying a whole list of characters, it tells the engine to consider any character between two characters. Another metacharacter `-` is needed to achieve this.
That way, we have a shorter and more readable regex pattern.

In practice, character sets will be preferred when a match is to be considered within a long range of characters while character sets will be preferred when a match should be considered only within a few characters.

A dash `-`, is only considered to be a metacharacter when it is used inside a pair of square brackets. Outside, it is just a literal character.

Be careful with character ranges, just like character sets they only match a single character. Therefore, the pattern `[10-73]` may look like a range from **10** to **73**, but in reality, it is a combination of a character set `[13]` and a character range `[0-7]` and will only match a single digit from **0** and **7**

## Negative character sets

A negative character set is almost identical to a regular character set with one key difference, it tells the engine to match any single character that was not specified inside the pair of square brackets.

The negation is specified as the first character, inside the pair of square brackets with the caret symbol `^`.

The caret symbol `^`, outside the square brackets, represents the beginning of the string to match.

Although it can be very helpful in many cases, a negative character set should be used with parsimony as it may lead to false positives, due to the large range of characters it usually looks for.

## Metacharacters inside character sets

Most metacharacters used inside of a character set are escaped by default, so there is no need to escape them again.

The only exceptions are:
- The closing bracket `]` which will end the character set earlier if not escaped
- The caret symbol `^` will negate the character set otherwise
- The dash symbol `-` which represents a range of character
- And finally, the backslash `\` metacharacter itself, which will escape the character directly following it if not escaped itself.

Try to exercise with a regex that matches these strings: **file01 file_1 file-1 file.1**

## Shorthand character sets

They are extremely useful and make patterns cleaner and more readable.

The syntax is extremely simple and only made of the escape metacharacter `\` and a literal alphabetical character.

| Shorthand   | Meaning              |  Equivalent!   |
| ----------- | -----------          | ----------     |
| \d          | digit                | [0-9]          |
| \D          | non-digit            | [^0-9]         |
| \w          | word character       | [a-ZA-Z0-9_]   |
| \W          | non word character   | [^a-zA-Z0-9_]  |
| \s          | space character      | [ \t\n\r]      |
| \S          | non space character  | [^ \t\n\r]     |

A shorthand character set can be used inside of a regular character.

Example: `/my[\s\_\-]pattern/`.

usage of shorthand negative character sets can be confusing.
The pattern `/[\S\D]/` will match either anything that is not a space character or anything that is not a digit. in short, it will match everything.