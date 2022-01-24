

var modalButton = document.querySelector(".modalbutton");
var modal = document.querySelector(".modal");
var modalbg = document.querySelector(".modal-bg")

modalButton.addEventListener('click', function () {

    modalbg.classList.add('hidden')
    console.log("Hi")

})

/*
conditions
CHECK IN

Check in before or at 12pm full amount
check in between 13 or 16.00 75 % amount
check in after 16.00 pm 50 % amount 

CHECK OUT 

Check out before 11.00 am : Free

Check out 11.00 after 15% extra of total cost 

Checkout after 1.00 25% extra 

Checkout between 1 to 3 50% extra
*/

// Work in Progress 
var rentprice = 1200;  //Price of One Room
var intime = " " + document.getElementById("intime").value  //getting the input in form of string 
var outtime = " " + document.getElementById("outtime").value
var indate = document.getElementById("indate").value // getting the input date in form of string 
var outdate = document.getElementById("outdate").value
var checkinstat = new Date(indate + intime);   // Combining two string into Date Object 
var checkoutstat = new Date(outdate + outtime);
var diffDays = parseInt((checkoutstat - checkinstat) / (1000 * 60 * 60 * 24), 10) 
var outTime = parseInt(outtime);   //
var inTime = parseInt(intime);
var roomCount = Number(document.getElementById("room").value)
var rent = 0

if(diffDays === 0 ){
        diffDays +=1
    }

if (roomCount >= 1) {

    if (inTime < 12 && outTime < 11.00) {
        rent += rentprice * roomCount *diffDays
    }
    else if (inTime < 12 && outTime > 11.00) {
        rent += rentprice * roomCount *diffDays *1.15
    }

    else if (inTime < 12 && outTime > 13.00) {
        rent += rentprice * roomCount *diffDays *1.25
    }

    else if (inTime < 12 && outTime > 16.00) {
        rent += rentprice * roomCount *diffDays *1.50
    }

    else if (inTime > 12 && inTime < 16) {
        rent += rentprice * 0.75 * roomCount * diffDays
    }
    else if (inTime > 16.00) {
        rent += rentprice * 0.50 * roomCount * diffDays
    }

    else{
        console.log("Enter a valid value")
    }


}