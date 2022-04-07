// START OF PROGRAM VARIABLES
const button = document.getElementById("submit");
const roughOdf = document.getElementById("roughOdf");
const ht = document.getElementById("ht");
const finishOdf = document.getElementById("finishOdf");
const odfZstart = document.getElementById("odfZstart");
const roughZfin = document.getElementById("roughZfin");
const roughId = document.getElementById("rough-id");
const container = document.getElementById("container");

// SELECT 
const codeRoughOdf = document.querySelectorAll(".rough-odf");
const codeHt = document.querySelectorAll(".hub-t");
const codeFinishOdf = document.querySelectorAll(".finish-odf");
const codeOdfZstart = document.querySelectorAll(".z-start-odf");
const codeRoughOdfAdd = document.querySelectorAll(".rough-odf--add");
const codeFinOdfAdd = document.querySelectorAll(".fin-odf--add");
const codeRoughZfin = document.querySelectorAll(".rough-zfin");
const codeRoughId = document.querySelectorAll(".rough-id");
const codeRoughIdSub = document.querySelectorAll(".rough-id--sub");

const codeRoughZfinAdd = document.querySelectorAll(".rough-zfin--add");
const codeDeburr = document.querySelectorAll(".deburr");



// EVENT LISTENER
button.addEventListener("click", function(e){

    codeRoughOdf.forEach(function(e,i){
      e.innerText = parseFloat(roughOdf.value).toFixed(3);
    });

    codeHt.forEach(function(e,i){
      e.innerText = parseFloat(ht.value).toFixed(3);
    });

    codeFinishOdf.forEach(function(e,i){
      e.innerText = parseFloat(finishOdf.value).toFixed(3);
    });

    codeOdfZstart.forEach(function(e,i){
      e.innerText = parseFloat(odfZstart.value).toFixed(3);
    });
  
    codeRoughOdfAdd.forEach(function(e,i){
        e.innerText = (parseFloat(roughOdf.value) + .1).toFixed(3);
    });

    codeFinOdfAdd.forEach(function(e,i){
      e.innerText = (parseFloat(finishOdf.value) + .1).toFixed(3);
    });
  
    codeRoughZfin.forEach(function(e,i){
      e.innerText = parseFloat(roughZfin.value).toFixed(3);
    });
    
  codeRoughIdSub.forEach(function(e,i){
      e.innerText = (parseFloat(roughId.value) - .6).toFixed(3);
    });
  
  codeRoughId.forEach(function(e,i){
      e.innerText = parseFloat(roughId.value).toFixed(3);
    });
  
  codeRoughZfinAdd.forEach(function(e,i){
      e.innerText = (parseFloat(roughZfin.value) + .05).toFixed(3);
    });
  
    codeDeburr.forEach(function(e,i){
      e.innerText = (parseFloat(finishOdf.value) - .32).toFixed(3);
    });

 })

// const programNumber = document.getElementById("roughOdf"), partNumber = document.getElementById("partNumber"), programVersion = document.getElementById("programVersion"), g54 = document.getElementById("g54"), codeProgramNumber = document.querySelectorAll(".codeProgramNumber"), codePartNumber = document.querySelectorAll(".codePartNumber"), codeProgramVersion = document.querySelectorAll(".codeProgramVersion"), codeG54 = document.querySelectorAll(".codeG54");

// END OF PROGRAM VARIABLES

// let zstart, pipeFaceRoughID, pipeFaceRoughOD, button, variables, codeZstart, codePipeFaceRoughtID, codePipeFaceRoughOD;
// let finishODP, pipeLength, codeFinishODP, codePipeLength;
// let finishID, oal, codeFinish, codeOal;




// PIPE FACE VARIABLES
// button = document.getElementById("submit");
// variables = document.querySelectorAll(".var");

// zstart = document.getElementById("zstart");
// pipeFaceRoughID = document.getElementById("pipeFaceRoughID");  
// pipeFaceRoughOD = document.getElementById("pipeFaceRoughOD"); 

// codeZstart = document.querySelectorAll(".codeZstart");
// codePipeFaceRoughID = document.querySelectorAll(".codePipeFaceRoughID");
// codePipeFaceRoughOD = document.querySelectorAll(".codePipeFaceRoughOD");

// ODP VARIABLES
// finishODP = document.getElementById("finishODP");
// pipeLength = document.getElementById("pipeLength");
// codeFinishODP = document.querySelectorAll(".codeFinishODP");
// codePipeLength = document.querySelectorAll(".codePipeLength");

// ID VARIABLES
// finishID = document.getElementById("finishID")
// oal = document.getElementById("oal")
// codeFinish = document.querySelectorAll(".codeFinish");
// codeOal = document.querySelectorAll(".codeOal");

// EVENT LISTENER
// button.addEventListener("click", function(){
  
//   function changeText(code, input) {
//     for(var i = 0; i < code.length; i++) {
//       code[i].textContent = input.value;
//     }
//   }
 
//  // Calculate the base of a triangle
//  function getTanFromDegrees(degrees) {
//   return Math.tan(degrees * Math.PI / 180);
// }
  
// function calculateZaxis(side,degree, angleLocation) {
//   var base;
  
//   if(angleLocation === b) {
//     base = side * getTanFromDegrees(degree);
//   } 
  
//   if(angleLocation === a) {
//     side = base * getTanFromDegrees(degree);
//   }

//     return base;
//   }
  
//   // START PROGRAM
//   changeText(codeProgramNumber, programNumber);
//   changeText(codePartNumber, partNumber);
//   changeText(codeProgramVersion, programVersion);
//   changeText(codeG54, g54);
  
//   // PIPE FACE
//   changeText(codeZstart, zstart);
//   changeText(codePipeFaceRoughID, pipeFaceRoughID);
//   changeText(codePipeFaceRoughOD, pipeFaceRoughOD);
  
//   // ODP
//   changeText(codeFinishODP, finishODP);
//   changeText(codePipeLength, pipeLength);
  
//   // ID
//   changeText(codeFinish, finishID)
//   changeText(codeOal, oal)

// })