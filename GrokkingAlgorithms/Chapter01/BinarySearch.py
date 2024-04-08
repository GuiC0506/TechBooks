"""
Logarithmic execution time.
"""

def binary_search(ordered_list:list[int], target_item:int):
    """
    if 'target_item' exists in 'ordered_list', then return its location index,
    if not, returns None.

    Arguments:
        ordered_list: [int] -> where to look after 'target_item'
        target_item: int

    Return: int | None
    """

    lower_index = 0
    greater_index = len(ordered_list) - 1

    while lower_index <= greater_index:
        middle_index = (lower_index + greater_index) // 2

        middle_item = ordered_list[middle_index]

        if(middle_item==target_item):
            return middle_index

        if(middle_item > target_item):
            greater_index = middle_index - 1
        
        else:
            lower_index = middle_index + 1
    
    return None

if __name__ == "__main__":
    ORDERED_LIST = list(range(240000));
    print(binary_search(ORDERED_LIST, target_item=7))
    print(binary_search(ORDERED_LIST, target_item=10))
