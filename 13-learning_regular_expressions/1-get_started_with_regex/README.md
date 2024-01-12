# Get Started with Regular Expressions

```python
"""
          _____                    _____                    _____                    _____                                  
         /\    \                  /\    \                  /\    \                  /\    \                 ______          
        /::\    \                /::\    \                /::\    \                /::\    \               |::|   |         
       /::::\    \              /::::\    \              /::::\    \              /::::\    \              |::|   |         
      /::::::\    \            /::::::\    \            /::::::\    \            /::::::\    \             |::|   |         
     /:::/\:::\    \          /:::/\:::\    \          /:::/\:::\    \          /:::/\:::\    \            |::|   |         
    /:::/__\:::\    \        /:::/__\:::\    \        /:::/  \:::\    \        /:::/__\:::\    \           |::|   |         
   /::::\   \:::\    \      /::::\   \:::\    \      /:::/    \:::\    \      /::::\   \:::\    \          |::|   |         
  /::::::\   \:::\    \    /::::::\   \:::\    \    /:::/    / \:::\    \    /::::::\   \:::\    \         |::|   |         
 /:::/\:::\   \:::\____\  /:::/\:::\   \:::\    \  /:::/    /   \:::\ ___\  /:::/\:::\   \:::\    \  ______|::|___|___ ____ 
/:::/  \:::\   \:::|    |/:::/__\:::\   \:::\____\/:::/____/  ___\:::|    |/:::/__\:::\   \:::\____\|:::::::::::::::::|    |
\::/   |::::\  /:::|____|\:::\   \:::\   \::/    /\:::\    \ /\  /:::|____|\:::\   \:::\   \::/    /|:::::::::::::::::|____|
 \/____|:::::\/:::/    /  \:::\   \:::\   \/____/  \:::\    /::\ \::/    /  \:::\   \:::\   \/____/  ~~~~~~|::|~~~|~~~      
       |:::::::::/    /    \:::\   \:::\    \       \:::\   \:::\ \/____/    \:::\   \:::\    \            |::|   |         
       |::|\::::/    /      \:::\   \:::\____\       \:::\   \:::\____\       \:::\   \:::\____\           |::|   |         
       |::| \::/____/        \:::\   \::/    /        \:::\  /:::/    /        \:::\   \::/    /           |::|   |         
       |::|  ~|               \:::\   \/____/          \:::\/:::/    /          \:::\   \/____/            |::|   |         
       |::|   |                \:::\    \               \::::::/    /            \:::\    \                |::|   |         
       \::|   |                 \:::\____\               \::::/    /              \:::\____\               |::|   |         
        \:|   |                  \::/    /                \::/____/                \::/    /               |::|___|         
         \|___|                   \/____/                                           \/____/                 ~~              
                                                                                                                            

"""
```

## What is a regular expression?
Regular Expresions or RegEx for short are a set of symbols that are used for text matching and replacing.
RegEx is an extremely useful tool for any software engineer and is available in all programming languages and comes in handy when it comes to
performing a search to find a substring into a long string.

Regular Expressions are fun to work with but can cause headaches if used in the wrong way, hence the famous quote:
>*<< Some people, when confronted with a problem, think "I know, I'll use regular expressions." Now they have two problems. >>*

kind of strange right? This sentence will make more sense as we dig deep into the realm of Regular Expressions.

### popular use case of regex:
- check if a phone number entered by a user is valid
- check if an email address is valid
- verify the format of a credit card
- extract a substring from a string using a pattern

## Free online resources to practice RegEx
- [regexr](https://regexr.com/)
- [regex101](https://regex101.com/)
- [rubular](https://rubular.com/)

## Modes
Besides the matching pattern itself, we have access to many options, also called mode or flag to affect the way the matching is performed.
Here are some of them:
- Standard Search (return only the first matching string):              **`/re/`**
- Global search (return all matching strings):                           **`/re/g`**
- Case insensitive search (perform a case-insensitive search):          **`/re/i`**
- Multiline search (consider a matching string even on multiple lines): **`/re/m`**
