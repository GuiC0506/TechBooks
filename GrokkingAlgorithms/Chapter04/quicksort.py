# O(n log n)
def quicksort(array):
    if len(array) < 2:
        return array;
    else:
        pivo = array[0]
        less_than = [i for i in array[1:] if i <= pivo]
        greater_than = [i for i in array[1:] if i > pivo]
        return quicksort(less_than) + [pivo] + quicksort(greater_than)

print(quicksort([10, 5, 2, 3]))
