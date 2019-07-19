//calculate the tips
function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  var serviceQual = document.getElementById("servicequal").value;
  var peopleAmt = document.getElementById("peopleamt").value;
  var currencySyb = document.getElementById("currencies").value;
//validate input
if (billAmt === "" || serviceQual == 0) {
    alert("please enter correct amounts");
    return;
}

//check if the people amount are not empty or less than 1
if (peopleAmt === "" || peopleAmt<= 1) {
    peopleAmt = 1;
    document.getElementById("each").style.display = "none"; 
} else {      document.getElementById("each").style.display = "block";
}

//calculate the tip
var total = (billAmt * serviceQual) / peopleAmt;
//round to two decimal places
total = Math.round(total*100) / 100;
//************next line allows us to always have two digital after decimal point
total = total.toFixed(2);
//display the tips
document.getElementById("totalTip").style.display="block";
document.getElementById("tip").innerHTML = total;
}

//hide the tip amount on load
document.getElementById("totalTip").style.display ="none";
document.getElementById("each").style.display = "none";
document.getElementById("calculate").onclick= function() {
    calculateTip();
}