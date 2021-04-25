/*
  var, let and const are used to assign a value for a given variable. A var can be redeclared and updated.
  In terms of scoping, you can access a var variable outside the a scope of a block provided that you are inside
  of the same function. A let variable on the other hand, is a variable that can be updated but can't be redeclared.
  Also, a let variable can't be accessed outside of a scope of a block. This implies that a let variable is more strict 
  than a var variable. A const variable is quite similar with the let variable in terms of scoping. However, it is a
  variable that you can't reassign. However, you can mutate the original value of a const. One thing to note also regarding 
  the const is that, it can't be initialized to undefined unlike the let variable.

  In general, prefer using const. If you know that the data isn't going to change, use const. Otherwise, use let if you need 
  to change the value of the variable later on. For the most part, you can avoid var as let and const are more precise
  due to their block scoping.

  Hoisting is the default behavior of Javascript in which it is defining all of the declarations at the top of the scope
  before the execution. This means that JavaScript declares the variable first in the background then, initializes them.
  So basically, the variable lifecyle occurs in this sequence: Declaration -> Initialization or Assignment -> Usage.
*/

/******************
  Use cases of var 
******************/
function actionForToday() {
  var isNotLazy = true; 
  if (isNotLazy){
    var action = "Study Javascript";
  }

  console.log(action); // action can be accessed outside of the if statement's scope provied that it is inside the "actionForToday" function
}

actionForToday();

/*******************
  Use cases of let
*******************/
let motivationLevel = 10;
let motivationLevel = 80; // this presents an error because a let variable can't be redeclared

function actionForToday() {
  var isNotLazy = true   
  if (isNotLazy){
    let action = "Study Javascript";
    console.log(action); // action can only be accessed here.
  }
}

actionForToday();

/********************
  Use cases of const
********************/
function fruitFunc() {
  const FAVEFRUIT = "Mango";
  FAVEFRUIT = "Peach";   // This line presents an error because you cant reassign a new value to a const variable
  console.log(FAVEFRUIT);

  const FRUITARRAY = ["apple", "orange", "mango"];
  FRUITARRAY.push("grapes");
  console.log(FRUITARRAY); // It's okay to mutate the original value of the const.
}

fruitFunc();
