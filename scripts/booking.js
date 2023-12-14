/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let mondayButton = document.getElementById("monday");
let tuesdayButton = document.getElementById('tuesday');
let wednesdayButton = document.getElementById('wednesday');
let thursdayButton = document.getElementById('thursday');
let fridayButton = document.getElementById('friday');

let fullDayButton = document.getElementById('full');
let halfDayButton = document.getElementById('half');

let clearButton = document.getElementById('clear-button');
let calculatedCostElement = document.getElementById('calculated-cost');

let dailyRate = 35;
let dayCounter = 0;

let calculated;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function changeColor(dayButton){
    if(!dayButton.classList.contains('clicked')){
        dayButton.classList.add('clicked');
        console.log("Clicked");
        dayCounter++;
        console.log(dayCounter);
    }
    else{
        dayButton.classList.remove('clicked');
        console.log("UnClicked");
        dayCounter--;
        console.log(dayCounter);
    }
    calculate();
}

mondayButton.addEventListener('click', function(event) {
    changeColor(event.currentTarget);
});
tuesdayButton.addEventListener('click', function(event) {
    changeColor(event.currentTarget);
});
wednesdayButton.addEventListener('click', function(event) {
    changeColor(event.currentTarget);
});
thursdayButton.addEventListener('click', function(event) {
    changeColor(event.currentTarget);
});
fridayButton.addEventListener('click', function(event) {
    changeColor(event.currentTarget);
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearAll(){
    mondayButton.classList.remove('clicked');
    tuesdayButton.classList.remove('clicked');
    wednesdayButton.classList.remove('clicked');
    thursdayButton.classList.remove('clicked');
    fridayButton.classList.remove('clicked');
    console.log("Cleared");
    dayCounter = 0;
    calculate();
}

clearButton.addEventListener('click', clearAll);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfDayClicked(){
    if(!halfDayButton.classList.contains('clicked')){
        halfDayButton.classList.add('clicked');
        fullDayButton.classList.remove('clicked');
        dailyRate = 20;
        console.log("Half");
        console.log(dailyRate);
        calculate();
    }
}

halfDayButton.addEventListener('click', halfDayClicked);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullDayClicked(){
    if(!fullDayButton.classList.contains('clicked')){
        fullDayButton.classList.add('clicked');
        halfDayButton.classList.remove('clicked');
        dailyRate = 35;
        console.log("Full");
        console.log(dailyRate);
        calculate();
    }
}

fullDayButton.addEventListener('click', fullDayClicked);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate(){
    calculated = dailyRate * dayCounter;
    calculatedCostElement.innerHTML = dailyRate * dayCounter;
}


