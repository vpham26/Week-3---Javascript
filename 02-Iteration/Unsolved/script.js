// TODO: Write Your JavaScript Code Here
//Creates an array containing names of five students in this class
var students = ["Mike","John","Haley","Kim","Nole"]

// Logs length of the array
console.log(students,length);

//For loop starts at 0, runs while i is less than length of students array 
// Increments by 1
for (var i=0; i < students.length; i++) {

// This statement will run each time the loop is executed
console.log("Great to see you, " + students[i] + "!");
}