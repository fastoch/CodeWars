# You have a magic box that doubles the count of items you put, in every day.
# The program takes the initial count of the items and the number of days as input. 

items = int(input())
days = int(input())

while days>0:
    items*=2
    days-=1
print(items) 
