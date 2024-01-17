# Repetition

```
 _____                      _    _  _    _               
|  __ \                    | |  (_)| |  (_)              
| |__) |  ___  _ __    ___ | |_  _ | |_  _   ___   _ __  
|  _  /  / _ \| '_ \  / _ \| __|| || __|| | / _ \ | '_ \ 
| | \ \ |  __/| |_) ||  __/| |_ | || |_ | || (_) || | | |
|_|  \_\ \___|| .__/  \___| \__||_| \__||_| \___/ |_| |_|
              | |                                        
              |_|                                        
```

## Repetition metacharacters

Repetition metacharacters are used to match 0, 1 or more consecutive occurrences of the character they are appended to.

| Repetition Metacharacter | Meaning                                                |
| ------------------------ | ------------------------------------------------------ |
| ?                        | Match Zero or One occurence of the precedent item      |
| +                        | Match at least one occurence of the precedent item     |
| *                        | Match precedente item zero, one or multiple times      |

Example:
- the regex `/apples?/` will only match `apple` and `apples`
- the regex `/apples*/` will match `apple`, `apples` and any word that starts with `apple` and ends with multiples `s`.
- the regex `/apples+/` will match `apples` as well as any word that starts with `apples` and ends with multiple `s`, but will not match the word `apple`.

Before we get to quantified repetition, it is essential to mention that repetition metacharacters such as `+, *, and ?` are greedy and need to be used with parsimony to avoid false positives.

## Quantified repetition

Quantified repetition is a more convenient, easy-to-understand and readable way of matching multiple consecutive repetitions of a character or a group of characters.

It uses metacharacters like `{`, `}` and `,` with a syntax following the structure `{min,max}`.
**min** is mandatory and represents the minimum number of the precedent characters that should be matched (greater or equal to Zero) and **max** is optional and represents the maximum number of the precedent characters that should be matched (max is assumed to be equal to min if value is not provided and no comma and assumed to be infinite if value is not provided but a comma is present).

Example of valid syntaxes:

- `/\d{2}/`: min is equal to 2 and max is also equal to 2. This pattern will match any two consecutive digits.
- `/\d{2,}/`: min is equal to 2 and max is equal to infinite. This pattern will match any consecutive digits of 2 characters or more.
- `/\d{2,5}/`: min is equal to 2 and max is equal to 5. This pattern will match any consecutive digits of a minimum of 2 characters and a maximum of 5 characters.

Most of the time, you will be using quantified repetition to match standardized data, when the target string is expected to have a specific format, such as a telephone number.

Use this string sample to practice quantified repetition in pattern construction:

```
1. a
2. ab
3. abc
4. abcd
5. abcde
6. abcdef
```

## Greedy expressions

The most crucial thing to understand is that regexes are greedy when we use repetition characters. This means that they will try to match the maximum number of characters possible.

**Example**: in this regex `/".+"/` and this string `"SALAD", "Tomato", "Onion"`, the way the engine works is:
- the first quote of the regex will match the first quote of the string
- then the repetition character `+` appent to the wildcard `.` will match the rest of the string from the character `S` to the last double quote.
- the engine will then realize that the pattern does not match the string this way and give back some characters until it finds a character that matches the next character literal or metacharacter in the pattern.
- in our case, the engine only gives back the last double quote character for a match to be found.

The key takeaway is that regexes are eager and greedy and a good understanding of these concepts is essential to construct precise patterns.

## Lazy expressions
