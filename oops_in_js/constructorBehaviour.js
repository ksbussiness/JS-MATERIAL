

How JavaScript Constructors REALLY Work ?
  
When you do:
new Test(...)

JavaScript does this internally (simplified):
Create an empty object: {}
Set its prototype → Test.prototype
Bind this to that object
Execute the constructor body
# Return value decision:
If constructor returns an object → use it
If it returns a primitive → ignore it, return this

“In JavaScript, constructors return this by default. If an object is explicitly returned, it replaces this. Primitive returns are ignored.”
  | Constructor returns | Final result             |
| ------------------- | ------------------------ |
| Object              | Returned object          |
| Array               | Returned array           |
| Function            | Returned function        |
| Primitive           | Ignored, `this` returned |
| Nothing             | `this` returned          |
“In JavaScript constructors, returning a primitive is ignored; returning an object replaces this.”


class Test {
  constructor() {
    return null; // primitive!
    return 10   // primitive
    return "hello" // primitive
  }
}
console.log(new Test());
