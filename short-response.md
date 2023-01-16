# Problem Set 4-5

## Classes and Inheritance 

**1. What is inheritance in programming?**

`Inheritance` in programming is the system of creating a newly created object that has the same characteristics as another object without explicitly duplicating its functionality. This is utilized with `super` classes and `sub` classes. These allow classes that are created to inherit properties from other classes.

**2. In a code snippet, demonstrate inheritance by creating two classes where one is the parent class and one is the child class.**

```javascript
class Parent {
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
}

class Child extends Parent {
    constructor(firstName,lastName,school)
    this.school = school
}

```

**3. What is polymorphism? Show an example in a code snippet.**

Polymorphism is a characteristics of Inheritance. One interface may be implemented by multiple objects. It allows a single function or method to operate on multiple types of data. 


```javascript
class Person {
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    
    class Student extends Person
    {
        constructor(firstName,lastName)
        super(firstName,lastName,school)
        this.school = school
        
        
        goToSchool(){
            console.log(` I got to ${this.school}`)
        }
    }
    
    class Teacher extends Person
    {
        constructor(firstName,lastName)
        super(firstName,lastName,subject)
        this.subject = subject
        
        
        teachSubject(){
            console.log(`I teach ${this.subject}`)
        }
    }

```