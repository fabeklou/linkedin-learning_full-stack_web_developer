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
|     ^    | Match at the beginning of the line |
|     $    | Match at the end of the line       |
|     \A   | Beginning of string, never end of line  |
|     \Z   | End of string, never end of line   |

The javascript regex engine does not have good support for `\A and \Z`.

Start and end anchors can be very useful when it comes to validating a whole string to make sure there is no junk data in it. Some use cases are email and phone number validation.

##

##
