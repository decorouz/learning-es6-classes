# learning-es6-classes

Learning about es6 classes and how they are better at implementing inheritance compared to prototypical inheritance

The second lecture talks about hoisting. Which is basiclly moving function to the top of the code at run time.
Hoisting also explain a critical different between function Declaration and Expression in JS.
Function Declaration are hoisted. Which means they are raised to the top of the code.

In constracts, function expressions are not hoisted.

However, it important to note here that Class Declarations are NOT HOISTED.

# STATIC METHOD

We have both the instance method and static method.

The static method are useful at creating utility functions. Just like we have Math utility functions that are not tied to a particular object.

# This Keyword in ES6 classes

The This keyword is automatic set to strict mode by the JS engine. This way we don't accidentally change the window object. This is another benefit of using the ES6 class. It help with make implimentation using This predictable. 

# Private Properties Using Symbols

In this lecture, we learned how to use Symbols to impliment Private Properties in Es6
