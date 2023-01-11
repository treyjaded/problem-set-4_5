
class Quadrilateral {
  constructor(side1 ,side2, side3, side4) {       
      this.side1 = side1
      this.side2 = side2
      this.side3 = side3
      this.side4 = side4
  }
  
  getPerimeter(){
   return [this.side1,this.side2,this.side3,this.side4].reduce((a,b) => a + b)
  // return this.side1 +  this.side2 +  this.side3 +  this.side4
  }
};

const quad = new Quadrilateral(3, 5, 9, 4);
console.log (quad.getPerimeter())

class Rectangle extends Quadrilateral{
  constructor(len, width, side1 ,side2, side3, side4){
    super(side1 ,side2 ,side3 ,side4 )
      this.side1 = len
      this.side2 = width
      this.side3 = len
      this.side4 = width
      this.len = len
      this.width = width
  }
  getArea(){
      return this.len * this.width
    }
}
 const rect = new Rectangle(30, 40);
 console.log(rect.getPerimeter()); // 140
 console.log(rect.getArea())

class Square extends Rectangle {
  constructor(len,width,side1 ,side2, side3, side4){
    super(side1 ,side2, side3, side4)
    this.side1 = len
    this.side2 = len
    this.side3 = len
    this.side4 = len
    this.len = len
    this.width = len
    }
  
  getDiagonal(){
    return Math.sqrt(2) * this.len
  }
}

 const sq = new Square(5);
 sq.side1; // 5
 sq.side2; // 5
 sq.side3; // 5
 sq.side4; // 5
 
 console.log(sq.side1)
 console.log(sq.getPerimeter()); // 20
 console.log(sq.getArea()); // 25
 console.log(sq.getDiagonal()); // 7.0710678
 
class Person {
  constructor(){
    
  }

}

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person
};
