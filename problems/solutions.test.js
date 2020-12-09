const solutions = require('./solutions');


test('Question 1: Quadrilateral', () => {
  const quad = new solutions.Quadrilateral(3, 5, 9, 4);
  expect(quad.side1).toBe(3);
  expect(quad.side2).toBe(5);
  expect(quad.side3).toBe(9);
  expect(quad.side4).toBe(4);
  expect(quad.getPerimeter()).toBe(21);
});

test('Question 1: Quadrilateral', () => {
  const quad = new solutions.Quadrilateral(6, 7, 5, 9);
  expect(quad.side1).toBe(6);
  expect(quad.side2).toBe(7);
  expect(quad.side3).toBe(5);
  expect(quad.side4).toBe(9);
  expect(quad.getPerimeter()).toBe(27);
});

test('Question 2: Rectangle', () => {
  const rect = new solutions.Rectangle(30, 40);
  expect(rect.side1).toBe(30);
  expect(rect.side2).toBe(40);
  expect(rect.side3).toBe(30);
  expect(rect.side4).toBe(40);
  expect(rect.getPerimeter()).toBe(140);
  expect(rect.getArea()).toBe(1200);
});

test('Question 2: Rectangle', () => {
  const rect = new solutions.Rectangle(10, 5);
  expect(rect.side1).toBe(10);
  expect(rect.side2).toBe(5);
  expect(rect.side3).toBe(10);
  expect(rect.side4).toBe(5);
  expect(rect.getPerimeter()).toBe(30);
  expect(rect.getArea()).toBe(50);
});

test('Question 2: Rectangle inherits from Quadrilateral', () => {
  const rect = new solutions.Rectangle(10, 5);
  const quad = new solutions.Quadrilateral(6, 7, 5, 9);
  expect(rect instanceof solutions.Quadrilateral).toBe(true);
  expect(rect.getPerimeter).toBe(quad.getPerimeter);
});

test('Question 3: Square', () => {
  const square = new solutions.Square(10);
  expect(square.side1).toBe(10);
  expect(square.side2).toBe(10);
  expect(square.side3).toBe(10);
  expect(square.side4).toBe(10);
  expect(square.getPerimeter()).toBe(40);
  expect(square.getArea()).toBe(100);
  expect(square.getDiagonal()).toBe(Math.sqrt(200));
});

test('Question 3: Square', () => {
  const square = new solutions.Square(5);
  expect(square.side1).toBe(5);
  expect(square.side2).toBe(5);
  expect(square.side3).toBe(5);
  expect(square.side4).toBe(5);
  expect(square.getPerimeter()).toBe(20);
  expect(square.getArea()).toBe(25);
  expect(square.getDiagonal()).toBe(Math.sqrt(50));
});

test('Question 2: Square inherits from Rectangle', () => {
  const square = new solutions.Square(10);
  const rect = new solutions.Rectangle(10, 5);
  const quad = new solutions.Quadrilateral(6, 7, 5, 9);
  expect(square instanceof solutions.Rectangle).toBe(true);
  expect(square.getPerimeter).toBe(rect.getPerimeter);
  expect(square.getPerimeter).toBe(quad.getPerimeter);
  expect(square.getArea).toBe(rect.getArea);
});

