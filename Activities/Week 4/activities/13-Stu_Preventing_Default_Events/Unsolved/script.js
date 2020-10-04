var totalPrice = document.querySelector("#startingTotal");
var startingTip = document.querySelector("#startingTip");
var tipBtn = document.querySelector("#submit");
var tipAmt = document.querySelector("#tip-amount");
var newTotal = document.querySelector("#new-total");

initialTotal = 0;

tipBtn.addEventListener("click", function(){
    var newTotal = totalPrice * startingTip + totalPrice;
});