"""
This algorithm (breadth-first search) is used to tell if there is a possible path between two vertexes.
If so, it finds the shorter path betweens to vertexes/things
It is used to find the approach that takes the minimum of steps to get to a goal

This algorithm uses graph in its process to find the shorter path

A graph is a group of connections. Each point that is connected to another point, is a vertex.
And the thing that connects the vertexes is a path

The "breadth-first search" start looking for a target item in a vertex. If the target item is not on that vertex, it adds, to its lists
of search, all of the neighboors of that vertex, so that they can also be searched

digraph (directed graph or cicles): the relationship between two vertexes occurs only in one direction. 
graph (non directed graph): the relationship between two vertexes occurs in both direction. Both vertexes are neighboors of each other

Important: n-1 degree connections are always checked before a n degree connection, given that n is >= 1
Following this rule, the vertexes start being added to a search list in this order. 
This way, always the shorter path is going to be find

To search the elements in the order that they are added, it is necessary a Queue (FIFO data structure), different from stacks (LIFO data structures)
The first to get in, is the first to get out
Possible actions: enqueue(push) and dequeue(pop)
This way, a item is enqueued. Then it is checked. If it is not the target item, all of its neighbors are enqueued.
And the process is repeated to the neighbors

Topologic Ordenation: it is a way of build a ordered list from a graph
Tree: it is a special graph where none of the arrows points back

If the queue gets empty at any moment, it means that none of the itens in that group of connection is the target item.
"""

from collections import deque

search_queue = deque()
graph = {}
graph["you"] = ["claire", "bob", "alice"]
search_queue += graph["you"]
# all of "you" neighbors are added to the queue as well

graph["bob"] = ["anuj orange", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = []
graph["peggy"] = ["you"]
graph["thom"] = []
graph["jonny"] = []

def is_vendedor(name:str):
    if "orange" in name:
        return name;
    
    return False

def breadth_first_search(name):
    search_queue = deque()
    search_queue += graph[name]
    verified_names = []

    while search_queue:
        person_to_search = search_queue.popleft()
        if not person_to_search in verified_names:
            if is_vendedor(person_to_search):
                print(person_to_search + " is a vendedor!")
                return True
            else:
                search_queue += graph[person_to_search]
                verified_names.append(person_to_search)

    return False

breadth_first_search("you")
