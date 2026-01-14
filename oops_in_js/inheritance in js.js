Js supports the single, multi-level, hierarchical, hybrid inheritance
But it does not supports the  multiple inheritance.

# Single Inheritance:
----------------------- >
> One child class inherits from one parent class.
EX:
class Person {
  greet() {
    return "Hello";
  }
}

class Student extends Person {
  study() {
    return "Studying";
  }
}

const s = new Student();
console.log(s.greet()); // Hello
console.log(s.study()); // Studying

note point:
////////////////////////////////////////
> Child automatically gets parent methods
> JS uses prototype chain, not classical inheritance
> extends works only with one class ?
//////////////////////////////////////////

# Multi-Level Inheritance :
------------------------------------- >
> A class inherits from another class, which inherits from another.
  EX:
class Animal {
  eat() {
    return "Eating";
  }
}

class Mammal extends Animal {
  walk() {
    return "Walking";
  }
}

class Dog extends Mammal {
  bark() {
    return "Barking";
  }
}

const d = new Dog();
console.log(d.eat());   // from Animal
console.log(d.walk());  // from Mammal
console.log(d.bark());  // from Dog

note point:
////////////////////////////////////////
> JS resolves methods bottom → top in prototype chain
> If method not found → goes up until Object.prototype
//////////////////////////////////////////

# Hierarchical Inheritance :
------------------------------------ >
> Multiple child classes inherit from one parent

EX:
class Vehicle {
  start() {
    return "Starting";
  }
}

class Car extends Vehicle {
  drive() {
    return "Driving";
  }
}

class Bike extends Vehicle {
  ride() {
    return "Riding";
  }
}

const c = new Car();
const b = new Bike();

console.log(c.start()); // Starting
console.log(b.start()); // Starting

note point:
////////////////////////////////////////
> Each child gets its own prototype
> Changes in one child do not affect others
//////////////////////////////////////////


# Why Multiple Inheritance is NOT supported in JS :
--------------------------------------------------------- >
> One single child class inheriting from multiple parent classes

EX:
class A {}
class B {}
class C extends A, B {} // ❌ SyntaxError

“JS avoids multiple inheritance to prevent ambiguity and uses composition instead.”
what is tehe main problem here in this case
and what is teh soltion here in this case



# Method Overriding (Supported in JS) :
------------------------------------------------ >
  
> Child class provides its own implementation of a parent method

ex:
class Parent {
  speak() {
    return "Parent speaking";
  }
}

class Child extends Parent {
  speak() {
    return "Child speaking";
  }
}

const c = new Child();
console.log(c.speak()); // Child speaking

Note :
/////////////////////////////////////////
> Child method completely replaces parent method
> Parent method is still accessible using super
////////////////////////////////////////
class Child extends Parent {
  speak() {
    return super.speak() + " loudly";    /// 
  }
}

const c = new Child();
console.log(c.speak()); // "Parent speaking loudly"

# Method Overloading (NOT supported in JS) :
--------------------------------------------------- >
> Same method name with different parameters
ex:
add(a, b)
add(a, b, c)

class Test {
  sum(a, b) {}
  sum(a, b, c) {} // ❌ overrides previous one
}

“JS supports function overloading behavior using rest parameters.”


# Constructor Overriding (Supported) :
----------------------------------------------- >
> Child class defines its own constructor

EX:
class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // ✅ mandatory  / otherwise we get the error 
    this.age = age;
  }
}

const c = new Child("Sachin", 25);
console.log(c);



  
