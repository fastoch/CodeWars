"""
https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/python

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Examples(Input => Output):
  35231 => [1,3,2,5,3]
  0 => [0]

"""

def digitize(n):
    list = []
    string = str(n)
    for i in range(0, len(string)):
        list.append(string[i])
        list[i] = int(list[i])
    list.reverse()
    return list
