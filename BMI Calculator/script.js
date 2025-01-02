// Metic - BMI -kg/m2
// Imperial English BMI Formula - (lb*703)/(in^2)
// Normal - 18.5 - 24.9 
// Underweight - < 18.5
// Overweight - 25 - 29.9
// Obese - 30 and above 

const btn = document.querySelector(".btn"),
result = document.querySelector(".result"),
category = document.querySelector(".category"),
reset = document.querySelector(".btn"),

feet = document.querySelector(".feet"),
inch = document.querySelector(".inches"),
weight = document.querySelector(".weight");

// add event listener to the button 
btn.addEventListener("click", calculateBMI);

function calculateBMI(e) {
    e.preventDefault();

    let heightsqd = convertHeight() ** 2;
    let BMI = (Math.round(((weight.value)*703)/(heightsqd) * 100) / 100);
    console.log(BMI);
    result.innerHTML = "You're BMI is: "+ BMI + ", you are: "+ determineHealth(BMI);

}
// whats the difference between calling the global varibles from a funciton and
// having the variable as an input?
// only reason I can think of is that the function wont run unless there is an input 
function convertHeight() {

    if (feet.value == null ){
       return result.innerHTML = "Provide a valid height";
    } else {
        let inches = Number(inch.value);
        // converts inches to feet 
        let convertfeet = Number((feet.value)*12);
      //  console.log(convertin);
        let converthght =  inches + convertfeet;
      //  console.log(converthght);
        return converthght;
    }
}

function determineHealth(BMI) {
    if (BMI <= 18.5) {
        return("UNDERWEIGHT");
    } else if (BMI <= 24.9 && BMI > 18.5) {
        return("NORMAL WEIGHT");
    } else if (BMI <= 29.9 && BMI > 24.9) {
        return("OVERWEIGHT");
    } else if (BMI > 29.9) {
        return("OBESE");
    }
}