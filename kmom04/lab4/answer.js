/**
 * @preserve 7a11ac5b7d8538ff1943b618d5cd5a63
 *
 * 7a11ac5b7d8538ff1943b618d5cd5a63
 * javascript1
 * lab4
 * jobk16
 * 2016-11-01 20:49:54
 * v2.2.21 (2016-10-07)
 *
 * Generated 2016-11-01 21:49:54 by dbwebb lab-utility v2.2.21 (2016-10-07).
 * https://github.com/mosbth/lab
 */

(function(dbwebb){
    "use strict";

    var ANSWER = null;

    console.log("Ready to begin.");


/** ======================================================================
 * Lab 4 - javascript1
 *
 * Practice basics on objects.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Create object
 *
 * Start by creating an empty object called 'person' by using the object
 * literal.
 *
 */



/**
 * Exercise 1.1
 *
 * Give your person-object the property 'firstName' with a value of 'Henri'.
 * Add a method called 'print1()' that returns a presentation of the object,
 * like this: 'My name is Henri.' Use 'this.firstName' to construct the
 * string.
 *
 * Answer with the result from calling 'person.print1()'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var Person = function(firstName){
    this.firstName = firstName;
    console.log('Created a person!');
};

function print1(){
    return 'My name is ' + p1.firstName + '.';
}

var p1 = new Person('Henri');

ANSWER = print1(p1);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2
 *
 * Add properties 'lastName' and 'nationality' to your person-object. Their
 * values should be 'Becquerel' and 'France'.
 *
 * Create the method 'person.print2()' which should say: 'My name is Henri
 * Becquerel from France.'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
 Person = function(firstName, lastName, nationality){
     this.firstName = firstName;
     this.lastName = lastName;
     this.nationality = nationality;
     console.log('Created a person!');
 };

function print2(Person){
    return 'My name is ' + Person.firstName + ' ' + Person.lastName +
            ' from ' + Person.nationality +'.';
}

var p2 = new Person('Henri', 'Becquerel', 'France');


ANSWER = print2(p2);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3
 *
 * Add the property 'born' with the value of a Date object: '1852-12-15'.
 * Create a method 'print3()' that says exactly the same as 'print2()'
 * followed by 'I was born 1852.'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

Person = function(firstName, lastName, nationality, born){
    this.firstName = firstName;
    this.lastName = lastName;
    this.nationality = nationality;
    this.dob = new Date(born);
};

function print3(person){
    return 'My name is ' + person.firstName + ' ' + person.lastName + ' from '
            + person.nationality + '. I was born ' + person.dob.getFullYear() + '.';
}

var p3 = new Person('Henri', 'Becquerel', 'France', '1852-12-15');


ANSWER = print3(p3);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4
 *
 * Create a second person, called 'person2' by using built-in function
 * 'Object.create()'. The person2 should have the following properties:
 * 'Albert, Einstein, Germany, 1879-03-14'.
 *
 * Print out details on the second person using 'person2.print3()'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var person2 = Object.create(Person, {firstName: { value: 'Albert'},
                                     lastName: {value: 'Einstein'},
                                     nationality: {value: 'Germany'},
                                     dob: {value: new Date('1879-03-14')}});
person2.print3 = function() {
    return 'My name is ' + this.firstName + ' ' + this.lastName + ' from '
            + this.nationality + '. I was born ' + this.dob.getFullYear() + '.';
};



ANSWER = person2.print3();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . More on objects
 *
 * Even more on objects!
 *
 */



/**
 * Exercise 2.1
 *
 * Create a object called 'shape' with the properties: 'x', 'y', 'height',
 * 'width' and 'print'. Create a new object from 'shape' called 'shape1' and
 * initiate the properties with: x:29, y:56, height:17, width: 19.
 *
 * Use the 'print' method to print out the assigned values as: 'x:?, y:?,
 * height:?, width:?'
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var shape = function(){
    this.x = 0;
    this.y = 0;
    this.height = 0;
    this.width = 0;
};

shape.print = function(){
  return 'x:' + this.x + ', ' +
         'y:' + this.y + ', ' +
         'height:' + this.height + ', ' +
         'width:' + this.width;
};

var shape1 = Object.create(shape, {x : {value : 29},
                                  y : {value : 56},
                                  height : {value : 17},
                                  width : {value : 19}});





ANSWER = shape1.print();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2
 *
 * Create a method 'shape.init(x, y, height, width)' that helps you to
 * initiate a object. Try it out by re-initing 'shape1' using the method.
 *
 * Answer with 'shape1.print()'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

 shape.init = function(x, y, height, width) {
      return Object.create(shape, {x : {value : x,
                                        writable: true},
                                   y : {value : y,
                                       writable: true},
                                   height : {value : height},
                                   width : {value : width}});
 };

var shape2 = shape.init(29, 56, 17, 19);
console.log(shape2);

ANSWER = shape2.print();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/**
 * Exercise 2.3
 *
 * Create another object from 'shape' called 'shape2' and initiate the
 * properties with: x:64, y:27, height:12, width: 12.
 *
 * Use the 'print' method to print out the assigned values.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */



shape2 = shape.init(64, 27, 12, 12);


ANSWER = shape2.print();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.3", ANSWER, false);

/**
 * Exercise 2.4
 *
 * Create a method in 'shape' that calculates and returns the area of the
 * shape. Try it out by calling it for 'shape1' and 'shape2'.
 *
 * Answer with both values, separated by ', ' (notice the space after the
 * comma).
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

shape.calculate = function(){
    console.log(this.height + ', ' + this.width);
    return this.height * this.width;
};




ANSWER = shape1.calculate() + ', ' + shape2.calculate();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.4", ANSWER, false);

/**
 * Exercise 2.5
 *
 * Create a method 'shape.overlapPoint(posX, posY)' that checks if a position
 * x, y is within the current shape. Or, the shape overlaps that position. The
 * shapes position x and y is top left of the shape. Return true or false.
 * Test by checking if x:47, y:72 is within 'shape1' and if x:63, y:26 is
 * within 'shape2'.
 *
 * Return the result separated by ', ' (notice the space after the comma).
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

shape.overlapPoint = function(x,y){
    if (x >= this.x && x <= this.x + this.width){
        return true;
    }
    else if (y >= this.y && y <= this.y + this.height){
        return true;
    } else return false;
};




ANSWER = shape1.overlapPoint(47, 72) + ', ' + shape2.overlapPoint(63, 26);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.5", ANSWER, true);

/**
 * Exercise 2.6
 *
 * Create a method 'shape.overlapShape()' that takes a shape as argument and
 * checks if the shapes overlaps (colliding bodies). Return true or false.
 * Create a new 'shape3' and initiate the properties with: x:39, y:65,
 * height:17, width: 19.
 *
 * Return the result from checking 'shape1.overlapShape(shape3)'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

shape.overlapShape = function(shape){
    var aLeftOfB = shape.x + shape.width < this.x;
    var aRightOfB = shape.x > this.x + this.width;
    var aAboveB = shape.y > this.y + this.height;
    var aBelowB = shape.y + shape.height < this.y;

    return !( aLeftOfB || aRightOfB || aAboveB || aBelowB );

    // if (((shape.x + shape.width) < (this.x + this.width)
    // && (shape.x) > (this.x)
    // && (shape.y) > (this.y)
    // && (shape.y + shape.height) < (this.y + this.height))
    // ||
    // ((shape.x + shape.width) > (this.x + this.width)
    // && (shape.x) < (this.x)
    // && (shape.y) < (this.y)
    // && (shape.y + shape.height) > (this.y + this.height))){
    //     return true;
    // } else return false;

    // if(shape.x <= this.x || shape.x + shape.width >= this.x + this.width){
    //     return true;
    // } else if (shape.y <= this.y || shape.y + shape.height >= this.y + this.height){
    //     return true;
    // } else return false;
};

var shape3 = shape.init(39, 65, 17, 19);




ANSWER = shape1.overlapShape(shape3);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.6", ANSWER, false);

/**
 * Exercise 2.7
 *
 * Create a method 'shape.move(moveX, moveY)' which moves the shape from its
 * current position by adding 'x += moveX' and 'y += moveY'. Try it out by
 * moving 'shape3' using 'moveX: 19, moveY: 17'.
 *
 * Re-check if the bodies 'shape1' and 'shape3' collides.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

shape.move = function(moveX, moveY){
    console.log("Now: " + this.x + ", " + this.y);
    this.x += moveX;
    this.y += moveY;
    console.log("After: " + this.x + ", " + this.y);
};

shape3.move(19, 17);



ANSWER = shape1.overlapShape(shape3);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.7", ANSWER, false);


    console.log(dbwebb.exitWithSummary());

}(window.dbwebb));
