"""
Complete the square sum function so that it squares each number passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9 because 1² + 2² + 2² = 9
"""
# my code
def square_sum(numbers):
    sum = 0
    for x in numbers:
        sum += x * x
    return sum
  
# alternative 1
def square_sum(numbers):
    return sum(x ** 2 for x in numbers)
  
# alternative 2
def square_sum(numbers):
    return sum(x * x for x in numbers) 
