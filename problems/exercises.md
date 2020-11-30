# Problem Set 4-4
## Coding Challenge

1. Create a function, `makeCounter`, that takes a parameter, `startingValue` and returns a function. When called, the returned function should increment `startingValue` and then return the number.
      ```javascript
      const countFromFive = makeCounter(5);
      countFromFive(); // 6
      countFromFive(); // 7 
      countFromFive(); // 9 

      const countFromOneHundred = makeCounter(100);
      countFromOneHundred(); // 101
      countFromOneHundred(); // 102
      countFromOneHundred(); // 103
      ```

2. Create a class, `Teacher`. Objects created with the `Teacher` function should have the following properties:
  * `name`
  * `school`
  * `grade`
  * `subject`
  * `students` (`students` should be initialized with the value of an empty array)

  `Teacher` objects should have the following two methods:
  * `addStudent()`, which takes a string student argument and adds it to the `Teacher` object's `students` property. This method should return the total number of students in the `students` array.
  * `changeSchools()`, which takes a string school argument and reassigns the object's `school`property to the passed argument. This method should return the name of the new school.
      ```javascript
      const maya = new Teacher('Maya Bhattacharjee', 'The Marcy Lab School', 'post-secondary', 'L&D');
      maya.name;                // 'Maya Bhattacharjee'
      maya.school;              // 'The Marcy Lab School'
      maya.grade;               // 'post-secondary'
      maya.subject;             // 'L&D'
      maya.students;            // []

      maya.addStudent('Paul');  // 1
      maya.addStudent('Peter'); // 2
      maya.students;            // ['Paul', 'Peter']

      maya.changeSchools('Uncommon Schools'); // 'Uncommon Schools'
      maya.school;              // 'Uncommon Schools'
      ```


3. Create a `Quadrilateral` class. It should be initialized with four arguments that represent the four sides of the quadrilateral. It should have one method: `getPerimeter`, which returns the perimeter of the quadrilateral.
      ```javascript
      const quad = new Quadrilateral(3, 5, 9, 4);
      quad.side1;          // 3
      quad.side2;          // 5
      quad.side3;          // 9
      quad.side4;          // 4

      quad.getPerimeter(); // 21
      ```

4. A rectangle is a special type of quadrilateral. Rectangles have four 90 degree angles and, thus, have two pairs of congruent sides. Create a `Rectangle` constructor with an _is-a_/inheritance relationship with your `Quadrilateral` constructor. `Rectangle`s should be initialized with two arguments, as rectangles can be described by their `length` and `width`. In addition to an inherited `getPerimeter` method, `Rectangle`s should have a `getArea` method, that returns the area of the `Rectangle` object.
      ```javascript
      const rect = new Rectangle(30, 40);
      rect.side1;          // 30
      rect.side2;          // 40
      rect.side3;          // 30
      rect.side4;          // 40

      rect.getPerimeter(); // 140
      rect.getArea();      // 1200
      ```


