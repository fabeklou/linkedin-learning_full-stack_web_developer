# Anchors

```
                        _                       
    /\                 | |                      
   /  \    _ __    ___ | |__    ___   _ __  ___ 
  / /\ \  | '_ \  / __|| '_ \  / _ \ | '__|/ __|
 / ____ \ | | | || (__ | | | || (_) || |   \__ \
/_/    \_\|_| |_| \___||_| |_| \___/ |_|   |___/
                                                
                                            
```

## Start and end anchors

Start and end anchors are metacharacters used to find a match, either at the start of a string, at the end, or in between.

Their role is to tell the regex engine where to look for matches and where not to look for matches.

| metacharacter  | meaning |
| -------- | -----------                   |
|     ^    | Match at the beginning of the string or line (in multi-line mode)|
|     $    | Match at the end of the string or line (in multi-line mode)      |
|     \A   | Beginning of string, never end of line  |
|     \Z   | End of string, never end of line   |

The javascript regex engine does not have good support for `\A and \Z`.

Start and end anchors can be very useful when it comes to validating a whole string to make sure there is no junk data in it. Some use cases are email and phone number validation.

## Line breaks and multiline mode

When looking for a match in a multiple-line string, it may be useful to match a pattern at the beginning of each line or the end of each line. That is when the `//m` option comes in

The `//m` flag or option activates the multi-line mode and allows matches to be found on multiple lines.

When the multi-line mode is used, the `^` metacharacter; matches not only the beginning of the string; but also the beginning of each line. Same thing for the `$` metacharacter that will now match the end of each line in addition to matching the end of the string itself.
The `\A and \Z` metacharacters remain the same and keep their initial behavior.

Many of the Unix tools only support single-line mode, as multi-line mode comes later on and was not integrated into most of them.


## Word boundaries

Word boundaries are like previously seen anchors; but for words. They tell the regex engine, the start and/or the end of a word. A word will be considered a match only if it is a real word with some non-word character before and after and not as part of a lengthier word.

The meta character `\b` is used to indicate the start or the end of a word and the metacharacter `\B` tells the engine not to consider a match at the extremity of the word (not a boundary). With `\B`, the match will be a sub-word and never a whole word.

We can also see `\b` as meaning, after/before this I want anything but not a word character (`a-zA-Z0-9_`), but should not be seen as a space character because it does not match any character and any non-word character creates two boundaries, one before and one after.

Just like start and end anchors, word boundaries represent position and not actual characters.

**Example**: the pattern `/\bsupportive\b/` will match the string `"supportive"` but not the string `"unsupportive"`. The pattern `/\BLove\B/` will match the string `"ILoveU"`.
 