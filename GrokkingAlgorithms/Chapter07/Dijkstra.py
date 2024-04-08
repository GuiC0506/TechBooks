"""
it finds the fastest path between two vertexes of a graph
It is not necessarily the shorter path. It is the fastest. In this case, the paths have a "weight", that counts more than the distance itself
So, the Djisktra algorithm works with weighted graps

each path has a number associated with it. This is the weight. This is why that kind of graph is called "WEIGHTED GRAPH" or "VALUED GRAPH"

in non weighted graphs, the minimum path is calulated via a breadth first search algorith, for example
The dijkstra algorithm only works with graph that don't have cicles or in graphs with a positive cicle weight

4 steps:
    1. Find the "cheapest" path
"""
