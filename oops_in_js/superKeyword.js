> super is used to access parent class constructors and methods from a child class.
> It works only in classes and only with inheritance.


| Place                  | Allowed |
| ---------------------- | ------- |
| Child constructor      | ✅ Yes   |
| Child instance methods | ✅ Yes   |
| Static methods         | ✅ Yes   |
| Arrow functions        | ❌ No    |
| Normal functions       | ❌ No    |
| Outside classes        | ❌ No    |


Important rules for super keyword:
----------------------------------------------- >
##) super() in Constructors:
.> In a derived class, super() must be called before using this.
  class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name);   // ✅ must come first
    this.age = age;
  }
}

const c = new Child("Sachin", 25);
console.log(c);


Note point: why to call super here in this case
...> this is created by the parent constructor, Child cannot access this until parent initializes it.
## super() in the method (Method Overriding) :

class Animal {
  speak() {
    return "Animal sound";
  }
}

class Dog extends Animal {
  speak() {
    return super.speak() + " - Bark";
  }
}
console.log(new Dog().speak());


## super keyword in the static keyword:
class Parent {
  static info() {
    return "Parent static";
  }
}

class Child extends Parent {
  static info() {
    return super.info() + " → Child static";
  }
}

console.log(Child.info()); // Parent static → Child static

note_point: In static methods, super refers to the parent class, not prototype.


"EDGE CASES IN THE SUPER METHOD:"
  # Arrow functions DO NOT have super.
    class A {
    speak() {
      return "A";
    }
  }
  class B extends A {
    speak = () => {
      return super.speak(); // ❌ SyntaxError
    }
  }
# super is NOT a variable, console.log(super); // ❌ SyntaxError

super(): “Calls the parent constructor.”
super.method(): “Calls the parent method.”
Mandatory rule: “super() must be called before this.”
Static super: “Refers to parent class.”
Arrow functions: “Do not support super.”

✔ super works only with inheritance
✔ Required in child constructors
✔ Accesses parent  methods




