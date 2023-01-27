# We need to create a program that allows users to create their own PIN codes for their bank cards. 
# Each PIN code consists of digits. 
# When the user enters a character, the program stops and outputs "Please enter a number" 
# When the user enters only digits, the program outputs "PIN code is created". 

pin = input()
try:
	# int() function occurs an error when the argument is not a number
	int(pin)
	print("PIN code is created")

except ValueError:
	print("Please enter a number")
