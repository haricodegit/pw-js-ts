// program to illustrate IfElse, Nested If, Switch case conditional statements

//IfElse

// let day = 7;

// if(day == 1) {
//     console.log('Sunday');
// }
// if(day == 2) {
//     console.log('Monday');
// }
// if(day == 3) {
//     console.log('Tuesday');
// }
// if(day == 4) {
//     console.log('Wednesday');
// }
// if(day == 5) {
//     console.log('Thursday');
// }
// if(day == 6) {
//     console.log('Friday');
// }
// if(day == 7) {
//     console.log('Saturday');
// }
// else {
//     console.log('Invalid input');
// }

// Nested if Else example

function checkGrade(grade){
    let score;

    if(grade >= 90) {
        score = 'A';
    }
    else if(grade >= 80) {
        score = 'B';
    }
    else if(grade >= 70){
        score = 'C';
    }
    else {
        score = 'D';
    }
return score;
}

// console.log(checkGrade(90));
// console.log(checkGrade(75));
// console.log(checkGrade(95));
// console.log(checkGrade(89));
// console.log(checkGrade(35));

//program to illustrate Switch case



function checkDayofWeek(daynum) {

    switch (daynum) {
        case 1:
            console.log('Sunday')
            break;
        case 2:
            console.log('Monday')
            break;
        case 3:
            console.log('Tuesday')
            break;
        case 4:
            console.log('Wednesday')
            break;
        case 5:
            console.log('Thursday')
            break;
        case 6:
            console.log('Friday')
            break;
        case 7:
            console.log('Saturday')
            break;
        default:
            console.log('pls enter valid day number')
            break;
    }
}

// checkDayofWeek(1)
// checkDayofWeek(5)
checkDayofWeek(4)
