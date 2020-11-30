const solutions = require('./solutions');

test('Question 1: makeCounter', () => {
  const countFromFour = solutions.makeCounter(4)
  countFromFour(); // 5
  countFromFour(); // 6
  countFromFour(); // 7
  expect(countFromFour()).toBe(8);
});

test('Question 2: Teacher instance was properly created', () => {
  const maya = new solutions.Teacher('Maya Bhattacharjee', 'The Marcy Lab School', 'post-secondary', 'L&D')
  expect(maya.name).toBe('Maya Bhattacharjee');
  expect(maya.school).toBe('The Marcy Lab School');
  expect(maya.grade).toBe('post-secondary');
  expect(maya.subject).toBe('L&D');
  expect(maya.students).toEqual([]);
  const ann = new solutions.Teacher('Ann Duong', 'Flatiron School', 'bootcamp', 'Coding')
  expect(ann.name).toBe('Ann Duong');
  expect(ann.school).toBe('Flatiron School');
  expect(ann.grade).toBe('bootcamp');
  expect(ann.subject).toBe('Coding');
  expect(ann.students).toEqual([]);
});

test('Question 2: Teacher instance methods work properly', () => {
  const maya = new solutions.Teacher('Maya Bhattacharjee', 'The Marcy Lab School', 'post-secondary', 'L&D');
  expect(maya.students).toEqual([]);
  expect(maya.addStudent("Paul")).toBe(1);
  expect(maya.addStudent("Laisha")).toBe(2);
  expect(maya.students).toEqual(['Paul', 'Laisha']);
  const ann = new solutions.Teacher('Ann Duong', 'Flatiron School', 'bootcamp', 'Coding');
  expect(ann.addStudent("Devonte")).toBe(1);
  expect(ann.students).toEqual(['Devonte']);
});

/*
  expect(maya.addStudent('Paul')).toBe(1);
  expect(maya.addStudent('Peter')).toBe(2);
  expect(maya.students).toEqual(['Paul', 'Peter']);
  expect(maya.changeSchools('Uncommon Schools')).toBe('Uncommon Schools');
  expect(maya.school).toBe('Uncommon Schools');
*/ 

// test('Question 3: Quadrilateral', () => {
//   const quad = new solutions.Quadrilateral(3, 5, 9, 4);
//   expect(quad.side1).toBe(3);
//   expect(quad.getPerimeter()).toBe(21);
// });

// test('Question 4: Rectangle', () => {
//   const rect = new solutions.Rectangle(30, 40);
//   expect(rect.side1).toBe(30);
//   expect(rect.side2).toBe(40);
//   expect(rect.side3).toBe(30);
//   expect(rect.side4).toBe(40);
//   expect(rect.getPerimeter()).toBe(140);
//   expect(rect.getArea()).toBe(1200);
// });

