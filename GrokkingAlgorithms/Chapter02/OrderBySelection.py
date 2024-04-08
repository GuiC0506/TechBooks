from typing import List

"""
perfomance:
    O(n^2) 
    
    Each item has to be iterate to be added to a seperate list.
    And this process has to be done each time a item is added to the other list.
    So, it has a perfomance of O(n) * O(n), which is O(n^2)
"""


def searchLowerIndex(arr):
    lower_item = arr[0]
    lower_index = 0

    for i in range(1, len(arr)):
        if arr[i] < lower_item:
            lower_item = arr[i]
            lower_index = i
    return lower_index

def sortBySelection(arr:List[int]):
    new_array = []
    for _ in range(len(arr)):
        lower = searchLowerIndex(arr)
        new_array.append(arr.pop(lower))
    return new_array

array = [1, 10, 5, 2, 8]
sorted = sortBySelection(array)
print(sorted)
