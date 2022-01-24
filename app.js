

var modalButton = document.querySelector(".modalbutton");
var modal = document.querySelector(".modal");
var modalbg = document.querySelector(".modal-bg")

modalButton.addEventListener('click', function () {

    modalbg.classList.add('hidden')
    console.log("Hi")

})

var modalFormButton = document.querySelector(".modalformbutton")



/*
conditions
CHECK IN

Check in before or at 12 pm full Booking Charges
Check in after 12 pm Three Fourth of Booking Charges 25
Check in after 4 pm Half of Booking Charges 50



CHECK OUT 

Check out before or at 12 pm No extra Charges
Check out after 12 pm 25% extra on Booking Charges
Check out after 4 pm 50% extra on Booking Charges


*/

// Work in Progress 

function rentcalculator(){
var rent = 0;
var rentprice = 1200;  //Price of One Room
var intime = " " + document.getElementById("intime").value  //getting the input in form of string 
var outtime = " " + document.getElementById("outtime").value
var indate = document.getElementById("indate").value // getting the input date in form of string 
var outdate = document.getElementById("outdate").value
var checkinstat = new Date(indate + intime);   // Combining two string into Date Object 
var checkoutstat = new Date(outdate + outtime);
var diffDays = parseInt((checkoutstat - checkinstat) / (1000 * 60 * 60 * 24), 10) 
var outTime = parseFloat(outtime).toFixed(2);   //
var inTime = parseFloat(intime);
var roomCount = Number(document.getElementById("room").value)


if(diffDays === 0 ){
        diffDays +=1
    }
    //1st
    if(inTime < 12.00 &&  outTime < 12.00 )
    {
        rent += rentprice * roomCount * diffDays 
    }
    
    else if (inTime <12 && outTime >12.00 && outTime <16.00 ){
        rent += rentprice * roomCount * diffDays * 1.25

    }

    else if (inTime <12 && outTime > 16.00 ){
        rent += rentprice * roomCount * diffDays * 1.50

    }
    //2nd
    else if (inTime > 12 && inTime < 16 && outTime < 12.00 ){
        rent += rentprice * roomCount * diffDays * 0.75

    }

    else if (inTime > 12 && inTime < 16 && outTime > 12.00 && outTime <16.00){
        rent += rentprice * roomCount * diffDays * 0.75 * 1.25

    }
    else if (inTime > 12 && inTime < 16 && outTime > 16.00){
        rent += rentprice * roomCount * diffDays * 0.75 * 1.50

    }
//3rd
    else if (inTime > 16 && outTime < 12.00){
        rent += rentprice * roomCount * diffDays * 0.25 

    }
    else if (inTime > 16 && outTime > 12.00 && outTime <16.00){
        rent += rentprice * roomCount * diffDays * 0.25 *1.25

    }
    else if (inTime > 16 && outTime > 16.00){
        rent += rentprice * roomCount * diffDays * 0.25 *1.50

    }



  
document.querySelector(".answer").innerHTML = `The rent of your room is ${rent}`

}




modalFormButton.addEventListener('click', rentcalculator)