"""
https://www.codewars.com/kata/5264d2b162488dc400000001/train/python

Write a function that takes in a string of one or more words, and returns the same string, but with 
all five or more letter words reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
"""

# my code
def spin_words(sentence):  
    liste = sentence.split()            # turns our sentence into a list of strings
    new_liste =[]                       # will contain elements of our new_sentence
    for x in liste:         
        if len(x) >= 5:
            x = x[::-1]                 # creates a slice that starts at the end of the string and moves backwards
        new_liste.append(x)             # feeds my new list
    new_sentence = ' '.join(new_liste)  # makes a new sentence with elements of my new list
    return new_sentence
  
  # alternative
  
