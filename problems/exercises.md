# Problem Set 4-5
## Coding Challenge

1. Create a `Quadrilateral` class. It should be initialized with four arguments that represent the four sides of the quadrilateral. It should have one method: `getPerimeter`, which returns the perimeter of the quadrilateral.
      ```javascript
      const quad = new Quadrilateral(3, 5, 9, 4);
      quad.side1;          // 3
      quad.side2;          // 5
      quad.side3;          // 9
      quad.side4;          // 4

      quad.getPerimeter(); // 21
      ```

2. A rectangle is a special type of quadrilateral. Rectangles have four 90 degree angles and, thus, have two pairs of congruent sides. Create a `Rectangle` constructor with an _is-a_/inheritance relationship with your `Quadrilateral` constructor. `Rectangle`s should be initialized with two arguments, as rectangles can be described by their `length` and `width`. In addition to an inherited `getPerimeter` method, `Rectangle`s should have a `getArea` method, that returns the area of the `Rectangle` object.
      ```javascript
      const rect = new Rectangle(30, 40);
      rect.side1;          // 30
      rect.side2;          // 40
      rect.side3;          // 30
      rect.side4;          // 40

      rect.getPerimeter(); // 140
      rect.getArea();      // 1200
      ```

3. A square is a special type of rectange. Squares have four sides that are all equal in length. Create a `Square` constructor with an _is-a_/inheritance relationship with your `Rectangle` constructor. `Square`s should be initialized with one argument, as squares can be described by only one of their sides. In addition to the inherited `getPerimeter` and `getArea` methods, `Squares`s should have a `getDiagonal` method, that returns the length of the `Square`'s diagonal (use Pythagorean Theorem).
      ```javascript
      const sq = new Square(5);
      sq.side1;          // 5
      sq.side2;          // 5
      sq.side3;          // 5
      sq.side4;          // 5

      rect.getPerimeter(); // 20
      rect.getArea();      // 25
      rect.getArea();      // 7.0710678

## Design Challenge

4. Design a `Person` class. An instance of `Person` should have three *or more* data properties which can be any type (string, number, boolean, array, object, etc.). Your `Person` class should have at least three **non-trivial** methods. For this assignment, a trival method is one that either gets the data property or sets the data property to the parameter value. In other words, methods like `setName()` or `changeName()` or `get name()` will not be accepted. 

This design challenge is purposefullly ambigous and open-ended to encourage creativity. There are no tests, so you will be responsible for testing the code yourself.



