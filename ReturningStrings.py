"""
https://www.codewars.com/kata/55a70521798b14d4750000a4/train/python

Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

"""

# my code
def greet(name):
    return "Hello, " + name + " how are you doing today?"
  
# alternative
def greet(name):
    return f'Hello, {name} how are you doing today?'
