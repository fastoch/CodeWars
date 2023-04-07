"""
https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/python

Given an array of integers, return a new array with each value doubled.

For example:
[1, 2, 3] --> [2, 4, 6]

"""

# my code
def maps(a):
    for i in range(0, len(a)):
        a[i] *= 2
    return a

# alternative
def maps(a):
    return [2 * x for x in a]
