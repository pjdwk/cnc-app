// SELECT SUBMIT BUTTON
const submitBtn = document.getElementById("submit");

// SELECT ROUGH DIMENSIONS
const roughHt = document.getElementById("r-ht");
const roughWt = document.getElementById("r-wt");
const roughOd = document.getElementById("r-od");
const roughOdf = document.getElementById("r-odf");
const roughtOal = document.getElementById("r-oal");

// SELECT FINISH DIMENSIONS
const finishHt = document.getElementById("f-ht");
const finishWt = document.getElementById("f-wt");
const finishOd = document.getElementById("f-od");
const finishOdf = document.getElementById("f-odf");
const finishtOal = document.getElementById("f-oal");

// SELECT CODE DIMENSIONS
const codeRoughOdf = document.querySelectorAll(".rough-odf");


// PLACEHOLDER VALUES
let rodfVal, val;



function removeZeros(arr) {
    arr = Array.from(arr)
       while(arr[arr.length -1] == "0") {
           arr.pop();
       }
       arr = arr.join("");
     }

// EVENT LISTENER
submitBtn.addEventListener("click", function(e){

    codeRoughOdf.forEach(function(e){
        // changes value to number with up to 4 decimals
        rodfVal = parseFloat(roughHt.value).toFixed(4);
        // converts to string which will allow it to become an array
        rodfVal = rodfVal.toString();
        // converts to an array
        rodfVal = Array.from(rodfVal);

        // removes the last index of an array if it is a zero
        while(rodfVal[rodfVal.length -1] == "0") {
            rodfVal.pop();
        }
        
        // converts value to string
        rodfVal = rodfVal.join("");
        // converts back to a number
        rodfVal = parseFloat(rodfVal);
        e.innerText = rodfVal;
    })




    
 })



//  REMOVES TRAILING ZEROS
//  let count = '99.1200';
//  let countArr =  Array.from(count);

//  function removeZero() {
//    while(countArr[countArr.length -1] == "0") {
//        countArr.pop();
//        console.log(countArr);
//    }
//    return countArr.join("");
//  }


let num1 = 99.12400;
num1 = num1.toFixed(4);
let arr1 = Array.from(num1.toString());