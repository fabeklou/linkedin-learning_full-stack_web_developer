# Lookaround assertions

```


 _        ____    ____   _  __           _____    ____   _    _  _   _  _____   
| |      / __ \  / __ \ | |/ /    /\    |  __ \  / __ \ | |  | || \ | ||  __ \  
| |     | |  | || |  | || ' /    /  \   | |__) || |  | || |  | ||  \| || |  | | 
| |     | |  | || |  | ||  <    / /\ \  |  _  / | |  | || |  | || . ` || |  | | 
| |____ | |__| || |__| || . \  / ____ \ | | \ \ | |__| || |__| || |\  || |__| | 
|______| \____/  \____/ |_|\_\/_/    \_\|_|  \_\ \____/  \____/ |_| \_||_____/  
                                                                                
                                                                                
            _____   _____  ______  _____   _______  _____   ____   _   _   _____ 
    /\     / ____| / ____||  ____||  __ \ |__   __||_   _| / __ \ | \ | | / ____|
   /  \   | (___  | (___  | |__   | |__) |   | |     | |  | |  | ||  \| || (___  
  / /\ \   \___ \  \___ \ |  __|  |  _  /    | |     | |  | |  | || . ` | \___ \ 
 / ____ \  ____) | ____) || |____ | | \ \    | |    _| |_ | |__| || |\  | ____) |
/_/    \_\|_____/ |_____/ |______||_|  \_\   |_|   |_____| \____/ |_| \_||_____/ 


```

## Positive lookahead assertions

Lookaround assertions are of two types, lookahead and lookbehind, divided into two versions, a negative one and a positive one.
Let's start with the positive lookahead.

Positive lookaheads are a very interesting regex functionality when it comes to matching an expression without keeping it in the final match string.

They are simple to use and can be extremely useful for extracting very precise information without matching too much.

The syntax is as follows: the group of characters that should be there before the match is confirmed is placed after the expression `?=` inside the pair of parenthesis `()`.

The question mark `?` placed first inside the group tells the regex engine not to treat that group as a regular one. The characters that follow it determine the way the group should behave.

Here, the equal sign `=` basically means that if this group is there, then validate the matching otherwise, ignore it.

a few things to remember:
- the optional group is included in the match
- the group is not captured
- available in most engines but not in Unix tools

Example: the pattern `/(?=green coffee)coffee/` will match `"green"` in the string `"green coffee"`

lookahead expressions mostly come before the final match like in the previous example, but can also come after like this: `/match(?=must_follo_match)/`


## Negative lookahead assertions

The opposite of a positive lookahead is a negative lookahead. With a negative lookahead assertion, an expression will only be considered a match if it is not followed by another defined expression.

Negative lookahead is quite less used compared to positive lookahead and can lead to false positives if not well understood.

The syntax is as follows: the group of characters that should not be there for a match to be valid is placed after the expression `?!` inside a pair of parenthesis.

Example: the pattern `/(?!café noir)café/` will match `"café"` in the string`"J'aime le café au lait"` because the sub-string `"café`" is not followed by one or more space characters and the sub-string `"noir"`.

A real-world problem where a negative lookhead can be useful would be ignoring comment lines while parsing a Python.

## Lookbehind assertions

lookbehind assertions are similar to lookahead assertions, with a single difference in checking for the presence of an expression right before the leading expression before validating a match.
Just like lookahead assertions, they are not added to the final match and are not captured.

The syntax for positive lookbehind is `(?<=)` and `(?<!)` for negative lookbehind.

example: the pattern `(?<=fruit )salad` will match `"salad"` in the string `"fruit salad"`

for more convenience, it is preferable to keep "lookahead" assertions ahead and lookbehind assertions "behind".

An important thing to remember is:
lookbehind assertions with variable length are not supported by most regex engines `(?<=(this|that|butNotThisOne))`, `'(?<=[abc]*)`.
On the other hand, lookahead assertions with variable length are fully supported in most regex engines.

## Multiple lookaround assertions


