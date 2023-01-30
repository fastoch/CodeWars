# A coffee vending machine makes 5 types of coffee
# Each coffee option has its own number, starting with 0
# Write a program that will take a number as input from the customer and serve the corresponding coffee  
# If the customer enters a number that is out of the accepted range, the program should output "Invalid number"
# Regardless of coffee option result, the program should output "Have a good day" at the end. 

coffee = ["Café Latte", "Caffe Americano", "Espresso", "Cappuccino", "Macchiato"]

choice = int(input())

try:
	#your code goes here
	print(coffee[choice])
except:
	#and here
	print("Invalid number")
finally:
	#and finally here
	print("Have a good day")
