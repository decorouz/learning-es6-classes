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

# Private Properties Using WeakMaps

WeakMaps are called so becauase their keys are weak. The key is an object that can take any value. Hence the name weak map.

The implimentation of this private property is different compared to the others we have explored so far.

# Getters and Setter Method

Implimenting Getters and Setters ins far simplier with ES6 classes. We use this methods as part of abstraction principle in JS.

# Inheritance

We use the extends keyword to impliment this in ES6. We don't have to reset object prototypes and constructor prototypes.
We also learned the use case for the keyword Super.

# Method Overriding

This is is implemented when you want to change the implementation of the method created in the base class in the child class. The super key word can also be used in this context when there is need to use the method in the base class in the child class too while at the same time overriding methods in the base class too.
