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

A character set `[abc]` can be compared to the arithmetic operator `OR` and grouping can be compared to the arithmetic operator `AND`.

Just like any character or metacharacter, grouping can also be used with repetition characters or quantified repetition expressions (`/pattern(\.)+/`).

**Example**: the pattern `/i (hate|like) the rain/` will match both the string `"I hate the rain"` and `"I like the rain"`.

Grouping can be very useful for, capturing and  replacing, alternation and repetition operator application

## Alternation metacharacters



## Efficiency when using alternation
