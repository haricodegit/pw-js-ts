// JavaScript program to remove trailing and leading spaces in a sentence

function spaceTrailLead(str) {
    return str.trim();
}


const str = "       no way return back      "
const noSpace = spaceTrailLead(str);
console.log(noSpace);