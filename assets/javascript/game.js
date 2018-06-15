var randomNumber = $("#randomnumber")
randomNumber.html(Math.floor(Math.random() * (100 - 30) + 30 ));

var win = $("#win")
var loss = $("#loss")
var crys1 = $("#crys1")
var crys2 = $("#crys2")
var crys3 = $("#crys3")
var crys4 = $("#crys4")
var total = $("#total")
var score = $("#score")

var numBox= [20, 10, 5, 1]

var num = numBox[Math.floor(Math.random()* numBox.length)];

console.log(num)

//if (document.ready){
  //  $("#crys1").on("click", function () {
    //    score.html(num);
      //  })
//}
//else{
  //  $("#crys2").on("click", function () {
    //    score.html(num);
      //  })
//}
//else{
  //  $("#crys3").on("click", function () {
    //    score.html(num);
      //  })
//}
//else{
  //  $("#crys4").on("click", function () {
    //    score.html(num);
      //  })
//}
// I DID NOT GET VERY FAR IN THIS PROJECT DUE TO POOR TIME MANAGEMENT AND UNDERESTIMATING THE DIFFICULTY OF THE ASSIGNMENT.

$("#crys1").on("click", function () {
    score.html(Math.floor(Math.random() * (20 - 10) + 10));
    })
$("#crys2").on("click", function () {
    score.html(Math.floor(Math.random() * (15 - 5) + 5));
    })
$("#crys3").on("click", function () {
    score.html(Math.floor(Math.random() * (10 - 1) + 1));
    })
$("#crys4").on("click", function () {
    score.html(Math.floor(Math.random() * (5 - 1) + 1));
    })


// assign a random number on start of page
// display random number in box
//crys1 = Math.floor(Math.random() * (20 - 10) + 10)
//crys2 = Math.floor(Math.random() * (15 - 5) + 5)
//crys3 = Math.floor(Math.random() * (10 - 1) + 1)
//crys4 = Math.floor(Math.random() * (5 - 1) + 1)