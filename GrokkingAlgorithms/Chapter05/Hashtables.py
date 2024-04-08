"""

hashtables are a combination of hash functions and arrays
hashtables are nothing more than a group of key-value pairs stored in a array
the key-value pair is possible because of a hash function

hashtables are O(1) in serch, insertion and deletion, in the medium case. In the worst case, it is O(n) for all the operations
In the medium case, is as good as arrays for reading, and as good as lists for inserting and deleting

A hash function, in its first execution, tells where it is possible to store that string correspondent in the array. In this way, it maps a string to a index permanently
In the next time, passing that string as parameter to the hash function, it will return the correspodent at constant time, because the hash function knows exactly where the value is stored

Hashtables can be used as cache, where the data is stored
Hashtables are good to stablish a relationship between two related things
Hashtables are good to identify duplicated itens

The ideal hash function is the one that maps exactly one key to one index in the array The not ideal hash function is the one that groups values and produces colisions
In other words, a good hash function, creates few colisions

Colision: a problem, when different keys are indicated to be at the same index in the array. This is the worst case of hashtables
- 1st solution: start a linked list in that index. Long linked lists worsen the perfomance of the hashtable
"""
notebook = {}

notebook["apple"] = 0.67

apple_price = notebook.get("apple")
print(apple_price)


page_cache = {}
def get_server_data(url):
    pass


def get_page(url):
    if page_cache.get(url):
        return page_cache[url]
    else:
        dados = get_server_data(url)
        page_cache[url] = dados
        return dados;

