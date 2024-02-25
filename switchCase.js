console.log('***********SwitchCase program for month selection of a Year*************')
let num = 5;
console.log("Month of a Year for month Number "+num+ " is "+monthOfYear(num));

function monthOfYear(monthnum) {
    let month;
    switch (monthnum) {
        case 1:
            month = 'January'
            break;
        case 2:
            month = 'February'          
            break;
        case 3:
            month = 'March'            
            break;
        case 4:
            month = 'April'           
            break;
        case 5:
            month = 'May'           
            break;
        case 6:
            month = 'June'            
            break;
        case 7:
            month = 'July'           
            break;
        case 8:
            month = 'August'           
            break;
        case 9:
            month = 'September'           
            break;
        case 10:
            month = 'October'           
            break;
        case 11:
            month = 'November'         
            break;
        case 12:
            month = 'December'           
            break;
        default:
            console.log('Please enter a valid month of a Year')
            break;
    }
    return month;
}


console.log('***********SwitchCase program for browser selection*************')
let browser = 'Safari1'
console.log('User selected browser name is: '+browserSelection(browser))

function browserSelection(browser) {
    let nameOfbrowser;

    switch (browser) {
        case 'Chrome' :
            nameOfbrowser = 'Chrome'
            break;
        case 'Firefox' :
            nameOfbrowser = 'Firefox'
            break;
        case 'Edge' :
            nameOfbrowser = 'Edge'
            break;
        case 'Opera' :
            nameOfbrowser = 'Opera'
            break;
        case 'Safari' :
            nameOfbrowser = 'Safari'
            break;
        case 'Internet Explorer' :
            nameOfbrowser = 'Internet Explorer'
            break;
        default:
            console.log(browser+ ' : is not a valid browser. Please select a valid browser name.. ')
            break;
    }
return nameOfbrowser;
}

