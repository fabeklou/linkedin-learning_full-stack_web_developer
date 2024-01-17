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

## Greedy expressions

## Lazy expressions
