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
^ $ [ ] ( ) \ ? + * - . , { } ! < =
```

### The wildcard metacharacter

### Escaping metacharacter

### Other special characters
