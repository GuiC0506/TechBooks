def regressive(n):
    print(n)
    if n <= 1: # recursive case
        return
    regressive(n-1) # base case

def regressive_while(n):
    while n <= 1:
        print(n)

regressive(5)

# call stack: a simple data structure, that works based on pushs and pops

def function1():
    print("Inside function one")
    function2()
    bye()

def function2():
    print("Inside function two")

def bye():
    print("Bye")

function1()

# every time a function is invoked, it is added to the top of the call stack
# in this moment, the hardware allocates a box of memory to the execution of that function
# then, this memory, is consumed, for example, to store the values of the variables inside the function.
# when the function finish its execution, it is removed from the callstack

# when a function is called inside another function, the function that calls another one 
# stays in a "partial-completed" state, paused.
# Even so, all the variables stored until that moment, they will be persisted until the end
# of the execution of the function that stored their values.
