# Characters

```
       _                                _                    
      | |                              | |                   
  ___ | |__    __ _  _ __   __ _   ___ | |_   ___  _ __  ___ 
 / __|| '_ \  / _` || '__| / _` | / __|| __| / _ \| '__|/ __|
| (__ | | | || (_| || |   | (_| || (__ | |_ |  __/| |   \__ \
 \___||_| |_| \__,_||_|    \__,_| \___| \__| \___||_|   |___/
                                                             

```

## Literal characters

The simplest form of a regular expression pattern is literal characters.

**Example:** The pattern `/great/` will match the string `"great"` but also the first four characters of the string `"greatness"`.

Remember, the search is case-sensitive by default, so the string `"Greatness"` will not be matched. If you wish to perform a case-insensitive search, as seen in the introduction, you need to append the `i` option or flag to your regex that will now look like this `/great/i`

You can use the JavaScript RegExp object method `.test()` to try this example.

```js
let pattern = /great/;
let string = 'greatness';
let isMatched = pattern.test(string);
console.log(isMatched); /* Expected output true i */
```
Another important information to remember; is that a RegEx engine parses the string submitted to it, from left to right.
In standard mode `/pattern/`, when the first match is found, the engine stops the search and returns the match. However, we have seen that we can perform a global search by appending the `g` flag to the pattern, which returns a complete list of matches.

## Metacharacters

Metacharacters are characters with special meaning. They hold the power of regular expressions.

Used with literal characters in pattern construction they can have diverse meanings depending on the way they are used or where they are placed in the pattern.

Here is a non-exhaustive list of metacharacters:
```
^ $ [ ] ( ) \ / ? + * - . , { } ! < =
```

### The wildcard metacharacter

The wildcard metacharacter `<.>`, is a special character that matches any characters except the new line character.

**example**: the pattern `/h.t/` will match the string/substring `hot`, `hat` and `hit` but since it only represents a single character it will not match the string `heat`.

To use the "real" `dot` that will only match the character `<.>` and not all characters like the wildcard character, we need to escape it using the backslash symbol.

**example**: the pattern `/xx\.xx/` should be preferred to match a string with this format `xx.xx`

Remember a good RegEx should match only the target string or sub-string and nothing more, and false positives should be avoided at all costs.

### Escaping metacharacter

If we want to use a literal character instead of the metacharacter itself we just have to escape it.

The escape character `<\> `is also a meta-character that precedes another meta-character and tells the regex engine to treat the following character as literal and not a meta-character.

**Example**: the pattern `/google\.com/` will only match the string `google.com` and not `google/com`

If you asked yourself, how do I use a literal backslash character in a pattern?

Well, this is a great question, and the answer is quite simple, you also need to escape it.
Remember the escape character is also a meta-character that tells the regex engine to treat what follows as a metacharacter and the backslash character is not an exception.

Must know:
- Literal characters should never be escaped
- Quotation marks are not meta-characters, so they should also not be escaped
- Just like backslash, the forward slash also needs to be escaped in most cases


### Other special characters

Other characters used in pattern construction:

- space character: is just a literal space character
- tab: `\t`
- line break: `\n`
- carriage return: `\r`
