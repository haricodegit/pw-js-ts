function Vote(Age) {
    if (Age >= 18) {
        console.log('You are eligible to vote')
    }
    else {
        console.log('Sorry, you must be 18 or older to vote')
    }
}

//Vote(-50);

NumCheck(0)
NumCheck(1)
NumCheck(-1)

function NumCheck(num) {
    if(num < 0){
        console.log(num+ " is a Negative number")
    }
    else if(num > 0) {
        console.log(num+ " is a Positive number")
    }
    else {
        console.log(num+ " is a Zero!")
    }
}

//Nested IF else

function Checkgrade(score) {
    let grade;
    if(score >= 90) {
        grade = 'A'
    }
    else {
        if(score >= 80) {
            grade = 'B'
        }
        else {
            if(score >= 70){
                grade = 'C'
            }
            else {
                grade = 'D'
            }
        }
    }
    return grade;
}

console.log("Grade: "+Checkgrade(91)) //A grade
console.log('Grade: '+Checkgrade(90)) //A grade
console.log('Grade: '+Checkgrade(89)) //B grade
console.log('Grade: '+Checkgrade(80)) //B grade
console.log('Grade: '+Checkgrade(70)) //C grade
console.log('Grade: '+Checkgrade(69)) //D grade
console.log('Grade: '+Checkgrade(50)) //D grade