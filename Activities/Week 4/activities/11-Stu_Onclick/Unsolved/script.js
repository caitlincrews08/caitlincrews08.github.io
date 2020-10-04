var incrementCount = document.querySelector("#increment");
var decrementCount = document.querySelector("#decrement");
var currentCount = document.querySelector("#count");

var count = 0

incrementCount.addEventListener("click", function(){
    count++;
    currentCount.textContent = count;
});

decrementCount.addEventListener("click", function(){
    if (count >0){
        count--;
        currentCount.textContent = count;
    }
});