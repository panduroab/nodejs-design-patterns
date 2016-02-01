# Proxy pattern

A **Proxy** controls the access to another object.

 --------------     -------------     ---------------
| ClientObject| --> |ProxyObject| --> |SubjectObject|
 --------------     -------------     ---------------
                    |function1()|     |function1()  |
                    |funciton2()|     |funciton2()  |
                    ------------      ---------------

The Proxy object and the Subject object has the same interface.
