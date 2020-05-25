# SDV-Week12


## Hash Tables
A hash table is basically a table for storing key-value pairs that we create with our code. Key value pairs that are object entries, such as the ones we had to make for one of our other labs: `let obj1 = {drivers: 12, cars: 15}`. The hash table stores them in an easy to read table.  
That example might be rather simple, as a good use for hash tables is to store more complicated values to be accessed by a single digit key, ie assigning a persons name, phone number, address to the key "A". Which can then be easily retrieved if we know the key. It is an extremely fast method of pulling out data

![Hash table](https://www.tutorialspoint.com/data_structures_algorithms/images/hash_function.jpg)  
*Image from tutorialspoint.com*

The hash function here is the function used to map the key value pairs (assign the value to a key). It takes an input, the key, and gives us an output, the value. Each key value pair in the hash table is also mapped to an index, resulting in the following  
![Hash table complete](https://www.freecodecamp.org/news/content/images/2020/03/hashtable.png)  
*Image from freecodecamp.org*

This is an example way of how to create a hash table in javascript  
![Imgur](https://i.imgur.com/i9I5veK.png)  
*From beginnersbook.com*

So it looks like you have to import a class first before you can access the methods and everything that you use with hashtables.

### Methods for hashtable class

1) `void clear()`: Removes all the key-value mappings from Hashtable and makes it empty. Clears this hashtable so that it contains no keys..

2) `Object clone()`: Creates a shallow copy of this hashtable. All the structure of the hashtable itself is copied, but the keys and values are not cloned. This is a relatively expensive operation.

3) `boolean contains(Object value)`: Tests if some key maps into the specified value in this hashtable. This operation is more expensive than the containsKey method.
Note that this method is identical in functionality to containsValue, (which is part of the Map interface in the collections framework).

4) `boolean isEmpty()`: Tests if this hashtable maps no keys to values.

5) `Enumeration keys()`: Returns an enumeration of the keys contained in the hash table.

6) `Object put(Object key, Object value)`: Maps the specified key to the specified value in this hashtable.

7) `void rehash()`: Increases the size of the hash table and rehashes all of its keys.

8) `Object remove(Object key)`: Removes the key (and its corresponding value) from this hashtable.

9) `int size()`: Returns the number of key-value mappings present in Hashtable.

10) `String toString()`: Returns the string equivalent of a hash table.

11) `boolean containsKey(Object key)`: Tests if the specified object is a key in this hashtable.

12) `boolean containsValue(Object value)`: Tests if the specified object is a value in this hashtable. Returns true if some value equal to value exists within the hash table. Returns false if the value isn’t found.

13) `Enumeration elements()`: Returns an enumeration of the values contained in the hash table.

14) `Object get(Object key)`: Returns the value to which the specified key is mapped, or null if this map contains no mapping for the key.
