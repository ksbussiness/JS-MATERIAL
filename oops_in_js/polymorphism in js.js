# "Polymorphism" means “one interface, many behaviors.”  or things in many foarms/Many behaviors.
ex:
  .. The same method name
  .. behaves differently
  .. based on the object calling it, not parameter types.
> JS polymorphism is runtime-based, not compile-time.

# JavaScript supports polymorphism via:
Type	JS Support
Method overriding	✅ YES
Duck typing	✅ YES
Prototype-based polymorphism	✅ YES

# Method Overriding (Primary Polymorphism)
> Child class provides its own version of a parent method.
class Animal {
  speak() {
    return "Animal sound";
  }
}

class Dog extends Animal {
  speak() {
    return "Bark";
  }
}

const animals = [ new Dog(), new Animal()];
animals.forEach(a => console.log(a.speak()));
Bark
Animal sound

NOTE POINT: Same method name: speak(), Different behavior , Decided at runtime.


Duck Typing pure Polymorphism:
--------------------------------- >
Polymorphism with the inheritance:

class FileLogger {
    log(msg){
       console.log("File",msg);
    }
}
class ConsoleLogger {
    log(msg) {
        console.log("Console",msg);
    }
}

function Logger(logger) {
    logger.log("hello")
}
Logger(new FileLogger());
Logger(new ConsoleLogger());
  
Polymorphism with out classes:
------------------------------------ >
> function makeSound(obj) {
    obj.sound();
}

const dog={
    sound() {
        console.log("Barking")
    }
};

const cat={
    sound(){
        console.log("Meowing")
    }
}
makeSound(dog);
makeSound(cat);

polymorphism via constructors:
------------------------------------------ >
Constructor Polymorphism

class User {
  constructor(name, role = "user") {
    this.name = name;
    this.role = role;
  }
}

new User("Sachin");
new User("Sachin", "admin");


Polymorphism: “Same method name, different behavior at runtime.”
JS type: “JavaScript supports runtime polymorphism through dynamic typing and prototype chains.”
Overloading: “JS doesn’t support method overloading; behavior is handled via rest parameters or conditionals.”

✔ JS polymorphism is dynamic
✔ Happens at runtime
✔ Driven by objects, not types
✔ Powered by prototypes & duck typing
✔ Overriding ✔
✔ Overloading ❌




