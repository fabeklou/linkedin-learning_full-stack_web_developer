# Capturing Groups and Backreferences

```
  _____                _                 _                  _____                                 
 / ____|              | |               (_)                / ____|                                
| |       __ _  _ __  | |_  _   _  _ __  _  _ __    __ _  | |  __  _ __   ___   _   _  _ __   ___ 
| |      / _` || '_ \ | __|| | | || '__|| || '_ \  / _` | | | |_ || '__| / _ \ | | | || '_ \ / __|
| |____ | (_| || |_) || |_ | |_| || |   | || | | || (_| | | |__| || |   | (_) || |_| || |_) |\__ \
 \_____| \__,_|| .__/  \__| \__,_||_|   |_||_| |_| \__, |  \_____||_|    \___/  \__,_|| .__/ |___/
               | |                                  __/ |                             | |         
               |_|                                 |___/                              |_|         
                   _ 
                  | |
  __ _  _ __    __| |
 / _` || '_ \  / _` |
| (_| || | | || (_| |
 \__,_||_| |_| \__,_|
       
 ____                _                  __                                           
|  _ \              | |                / _|                                          
| |_) |  __ _   ___ | | __ _ __   ___ | |_   ___  _ __   ___  _ __    ___   ___  ___ 
|  _ <  / _` | / __|| |/ /| '__| / _ \|  _| / _ \| '__| / _ \| '_ \  / __| / _ \/ __|
| |_) || (_| || (__ |   < | |   |  __/| |  |  __/| |   |  __/| | | || (__ |  __/\__ \
|____/  \__,_| \___||_|\_\|_|    \___||_|   \___||_|    \___||_| |_| \___| \___||___/

```

## Captures and backreferences

Group expressions `(expression)` are captured and saved in memory by default by regex engines. These captures are available further in the same pattern or outside to be used by backreferences or for replacement. Two syntaxes are used to access such capture `(the $int and the \int)`.
Here, `int` represents an integer value from `1` to `9`.
Some regular expression engines can support two-digit captures from `10` to `99`, but this is to avoid as it may make the expression hard to understand.
Another important piece of information is that Most engines will not support the `\int` syntax so, it might be worth checking before using it.

Example: the pattern `/ba(nana)/` will match the string `banana` and capture `"nana`. Then there is a need to match the same captured group in the string `$1` will be used.

Backreference can be extremely useful to match, extract or replace the content of an HTML file by making sure closing tags correspond to opening tags.

## Backreferences to optional expressions

At this point, we already know a bit about optional expressions. As a reminder, optional expressions are made of two parts, the expression (maybe a character literal, a character set or a group of characters) and the repetition metacharacter `?` directly appended to it.

Used inside a pattern, they define an expression that will be matched if exists or be ignored otherwise.

We have seen earlier in this section that, groups are captured by default. But in the case of an optional expression, the engine will behave differently depending on the position of the `?` metacharacter.

Let's try to see this with some examples:
- the pattern `/(A?) banana/` will match the string `"A banana` and capture `A`, or match the string `banana` and capture a zero-width match (empty string).
- the pattern `/(in)?valuable/` will match the string `invaluable` and capture the string `in`, or match the string `valuable` and not capture anything, because optional expressions are only captured if they match, like if the meaning of the `?` metacharacter extends to the capture, changing his initial behavior. 

If an optional group is not captured it will not have a backreference. This may cause an issue if you try to use it further in the same pattern or outside. One way to avoid this problem is to wrap the conditional expression into another pair of parenthesis; this will ensure something is always captured, a group of characters or an empty string.

**Example**: the regex `/((in)?)dependent/` will match the string `"independent"` and capture the string `"in"` or match the string `"dependent"` and capture `""`.

## Find and replace using backreferences



## Non-capturing group expressions
