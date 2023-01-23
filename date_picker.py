# You are making a date picker for a website and need to output all the years in a given period.
# Write a program that takes two integers as input and outputs the range of numbers between the two inputs as a list. 
# The output sequence should start with the first input number and end with the second input number, without including it. 

a = int(input())
b = int(input())
#your code goes here
list = []
for i in range(a,b):
    list.append(i)
print(list)

# refactored
print(list(range(a,b)))
