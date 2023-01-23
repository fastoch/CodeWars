# You have a magic box that doubles the count of items you put, in every day.
# The given program takes the initial count of the items and the number of days as input. 

items = int(input())
days = int(input())
#your code goes here
while days>0:
    items*=2
    days-=1
print(items) 
