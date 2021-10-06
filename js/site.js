//get starting values from the screen
function getString() {
    //get the user's iput
    let userString = document.getElementById("userString").value;

    //version 2 will test the user's input

    //reverse the user's input-this is a seperate function
    let revString = reverseString(userString)

    //displays the result
    displayString(revString)
}

function reverseString(userString){
    let startValue = userString.length-1;
    let endValue = 0;
    let revString = "";


    for (let index = startValue; index >= endValue; index--) {
        revString += userString[index];
    };

    return revString

}

function displayString(revString){
    let output = document.getElementById("results");
    output.innerHTML = revString; 
}
