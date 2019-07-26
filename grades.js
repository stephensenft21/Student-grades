

//random scores stored in a an array
let studentScores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
//object for storing total grades
let grades = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0,
}
//function to loop through and sort random scores.
// used a boolean statement if the score was == to index position add 1 to key value    ` 
let totalGrades = () => {
     for(let i = 0; i< studentScores.length; i++){
         if(studentScores[i] <= 100 && studentScores[i]>= 91 === true){
             grades.A += 1
         } else if (studentScores[i] <= 90 && studentScores[i]>= 81 === true){
             grades.B += 1;
         } else if ( studentScores[i] <= 80 && studentScores[i] >= 71 === true) {
             grades.C += 1;
         } else if (studentScores[i] <= 70 && studentScores[i] >= 61 === true){
             grades.D += 1;
         } else if (studentScores[i] <= 60 && studentScores[i] >= 50 === true) {
             grades.F += 1;
         }
     } 

    
}

//calling the function and console logging the results
totalGrades()
   // studentScores.sort(studentScores)
     console.log(grades)
     console.log(totalGrades)
     console.log(studentScores[3])//lowest score
     console.log(studentScores[4])// highest score
       