What is Abstraction?
> Abstraction means exposing only what the user needs and hiding how it is implemented.
  
# In simple words:
Show WHAT an object can do.
Hide HOW it does it.

# Abstraction helps to:
----------------------- >
Reduce complexity
Hide implementation details
Improve maintainability
Allow internal changes without breaking users
Enforce correct usage

Does JavaScript Support Abstraction?
❌ JavaScript has NO: abstract keyword

Real-World Abstraction Example
Browser API fetch("url");


# One-Line Interview Answers (Memorize)
Abstraction: “Hiding implementation details and exposing behavior.”
JS support: “Achieved using patterns, not keywords.”
Best approach: “Composition and modules.”
Difference: “Encapsulation hides data; abstraction hides logic.”



edge case:
--------------- >
ex:
class Area{
    constructor(a,b) {
        this.a=a;
        this.b=b
    }
    return this.a*this.b
}
const obj=new Area(10,5)
console.log(obj) // get an error

> You cannot write return directly inside a class body.
In a class:
> Only methods are allowed
> return must be inside a method, not floating in the class







