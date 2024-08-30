"""
Adeeb Khan
Aug 29, Python Classes
"""

print("\n----- Example 1: Class Definition")
class MyClass:
    x = 5

#calling class MyClass
myclass1 = MyClass()
print("The complete class ", myclass1)
print("Property of MyClass", myclass1.x)

print("\n----- Example 2: Initialized a Class")
class Person:
    # initialize class properties' values (similar to constructor)
    def __init__(self, name, age):
        self.name = name
        self.age = age
        # set a class property
        self.luckynumber = 88
    
    # return string (similar to tostring method)
    def __str__(self):
        return f"User {self.name} is {self.age} years-old"
    
    # method
    def myMethod(self):
        print(f"{self.name}'s lucky number is {self.luckynumber}")

#calling class, create an object Person
user1 = Person("Ann", 23)

print(f"Result --> {user1}")
user1.myMethod()
print(f"Class property --> {user1.luckynumber}")

# modify class property's value
user1.age = 31
print(f"Result --> {user1}")

# empty class, pass acts as placeholder 
class Schedule:
    pass


print("\n----- Example 3: Class with Adjustable Methods")
class Number:
    def __init__(self, num):
        self.num = num

    # accessible property
    num_symbol = '$'

    # define a method to double the number
    def doubleNumber(self):
        self.num *= 2
    
    # define to string
    def __str__(self):
        return f"The final number is {self.num}"

# create an object of class Number
n1 = Number(12)
# print the object of Class Number
print(f"Object of class number --> {n1}")
# call method doubleNumber()
n1.doubleNumber()
n1.doubleNumber()
# print the object of class Number
print(f"Object of class Number --> {n1}")

print("\n----- Example 4: Class with Private Properties")
class Chair:
    def __init__(self, height, width, length):
        self.height = height
        self.width = width
        self.length = length
        self.totalDimensions = 0
        self.shippingCostFee = 0.2
        self.totalshippingCost = 0

    # accessible '_private' property
    _chair_color = 'brown'

    # method to calculate the total dimension
    def get_totalDimensions(self):
        return self.height * self.length * self.width
    
    # return string of the class
    def __str__(self):
        return f"The total dimension for the {self._chair_color} chair is {self.get_totalDimensions()} units"
        
# create an object of the class
chair1 = Chair(3,4,5)
#print the object
print(f"Result for {chair1._chair_color} chair with dimension --> {chair1}")