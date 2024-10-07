// JavaScript program to find out if the given number is prime number or not

function isPrime(num) {
    if(num <= 1) {
        return false
    }

    for(let i = 2; i<=Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false
        }
    }
    return true
}

let number = 30;
if(isPrime(number)) {
    console.log(`Number ${number} is a prime number`);
} else {
    console.log(`Number ${number} is not a prime number`);
}