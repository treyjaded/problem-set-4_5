// Question 1
function makeCounter(startingValue){
  let count = startingValue;
  return function(){
    count += 1;
    return count;
  }
}

// Question 2
function makeFriendList(){
  return {
    _friends: [],
    addFriend: function(name){
      this._friends.push(name)
      return `${name} successfully added.`
    },
    removeFriend: function(name){
      let index = this._friends.indexOf(name)
      if (index === -1) {
        return `${name} not found.`
      }
      this._friends = this._friends.filter(friend => friend !== name)
      return `${name} successfully removed.`
    },
    displayFriends: function(){
      return this._friends
    },
  }
}

// Question 3
class Teacher {
  constructor(name, school, grade, subject){
    this.name = name;
    this.school = school;
    this.grade = grade;
    this.subject = subject;
    this.students = [];
  }
}

// Question 4
class Quadrilateral {

}

// Question 5
class Rectangle {

}

module.exports = {
  makeCounter,
  makeFriendList,
  Teacher, 
  Quadrilateral,
  Rectangle
};