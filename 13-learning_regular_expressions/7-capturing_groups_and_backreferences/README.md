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



## Find and replace using backreferences



## Non-capturing group expressions
