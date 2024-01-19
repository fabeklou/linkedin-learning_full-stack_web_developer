# Grouping and alternation

```
                                   _                                   _          _  _                              _    _               
                                  (_)                                 | |        | || |                            | |  (_)              
  __ _  _ __   ___   _   _  _ __   _  _ __    __ _    __ _  _ __    __| |   __ _ | || |_   ___  _ __  _ __    __ _ | |_  _   ___   _ __  
 / _` || '__| / _ \ | | | || '_ \ | || '_ \  / _` |  / _` || '_ \  / _` |  / _` || || __| / _ \| '__|| '_ \  / _` || __|| | / _ \ | '_ \ 
| (_| || |   | (_) || |_| || |_) || || | | || (_| | | (_| || | | || (_| | | (_| || || |_ |  __/| |   | | | || (_| || |_ | || (_) || | | |
 \__, ||_|    \___/  \__,_|| .__/ |_||_| |_| \__, |  \__,_||_| |_| \__,_|  \__,_||_| \__| \___||_|   |_| |_| \__,_| \__||_| \___/ |_| |_|
  __/ |                    | |                __/ |                                                                                      
 |___/                     |_|               |___/                                                                                       

```

## Grouping metacharacters

When constructing a regular expression pattern, we often need to match a group of characters (like a string literal, but inside our pattern) or a sub-pattern. This is done through grouping. Grouping uses metacharacters `(` and `)` to unclose a sub-pattern inside our main pattern.

Grouping is mostly used when at a certain place in a pattern we need to match at least two different characters or a string.

Just like any character or metacharacter, grouping can also be used with repetition characters or quantified repetition expressions (`/pattern(\.)+/`).

**Example**: the pattern `/i (hate|like) the rain/` will match both the string `"I hate the rain"` and `"I like the rain"`.

Grouping can be very useful for:
- capturing and  replacing: using the $index (1 indexed) to get each captured group individually
- alternation: using the metacharacter `|`, with the syntax `(pattern1|pattern2|patternx)`
- or apply repetition operator or quantified repetition: `/I am (so ){1,}happy !/`

## Alternation metacharacters

As said in the previous section, alternation in one of the use cases of grouping (if not the main). Alternation is comparable to an `OR` logical operator and uses the pipe symbol `|` to separate the operands (in this context group of characters).

The engine checks for potential matches from left to right and leaves the group immediately after a match is found.

Although alternation can be used without grouping, it is advisable to as much as possible use both together to avoid any ambiguity.

Example:
- the pattern `/(aa|bb|cc){3}/` match `"aabbcc"`, `"aaccbb"`, `"bbccaa"`, `"bbaacc"` ... 

## Efficiency when using alternation
