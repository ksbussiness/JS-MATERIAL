
"Encapsulation": It the practice of bundling/ wrapping data and methods together and restricting direct access to the internal state.

> In JavaScript: You hide internal data , only expose the data what needed and Prevent accidental modification.

Ways to Achieve Encapsulation in JavaScript:
Closures	✅ YES
Private class fields (#)	✅ YES (ES2022+)
Getter / Setter	✅ YES
WeakMap	✅ YES
Module scope	✅ YES
Naming convention (_)	⚠️ Soft only

EX_1:
class BankBalance {
    #balance;
    constructor(balance) {
        this.#balance=balance;
    }
  getBalance() {
    return this.#balance;
  }
}
const ass=new BankBalance(100)
console.log(ass.getBalance())
//console.log(ass.#balance) // can not get the data directly because of the private variable.

EX_2: 
class Parent {
    #name="sachin"
}
class Child extends Parent {
    callMe() {
        console.log(this.#name)
    }
}
const obj= new Child()
console.log(obj.callMe()) // we get error
Note : The Private fields belong only to the declaring class, so can not be accessed in the child classes.


JS approach: “JavaScript achieves encapsulation through closures, private fields, and modules.”
Best modern way: “Private class fields using #.”

Object.freeze() makes an object immutable (read-only).
ex:
const user = {
  name: "Sachin",
  role: "admin"
};

Object.freeze(user);

user.name = "Rahul";     // ❌ ignored
user.age = 25;           // ❌ ignored
delete user.role;        // ❌ ignored

console.log(user);


Is Object.freeze() Encapsulation?
❌ NO — very important

Object.freeze() does NOT hide data
It only prevents modification


note point: JS does not have the private keyword but typescript does.

private restricts access at compile time, not at runtime.
It means:
❌ Not accessible outside the class
❌ Not accessible in child classes
✅ Accessible inside the class only
class Example {
  private secret = "hidden";

  reveal() {
    return this.secret;
  }
}

const e = new Example();
e.secret; // ❌ TypeScript ERROR
console.log(e["secret"]); // ✅ Works at runtime (JS)
Because TypeScript removes private after compilation.











