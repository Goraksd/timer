
window.addEventListener('keydown', function(e){
if(e.keyCode == 80){
pause()
} else if(e.keyCode == 82){
reset();
}
});
var counter = 0;
var countermin = 0;

var bool = false;
var id = setInterval("timer()", 1000);
function timer(){
    counter++;
    if(counter == 60){
        countermin++;
        document.getElementById("min").innerHTML = countermin;
        counter = 0;  
        if(countermin == 60){
            counter = 0;
            countermin = 0;
        }    
        document.getElementById("min").innerHTML = countermin;
    }; 
    document.getElementById("sec").innerHTML = counter;
};
$("#reset").click(function(){
    reset();
});
$("#pause").click(function(){
  pause();
});
function pause(){
    if(bool == false){
        var tempsec = counter;
        var tempmin = countermin;    
        clearInterval(id);
        bool = true;
    } else{
        id = setInterval("timer()", 1000);
        bool = false;  
    }
}
function reset(){
    counter = 0;
    countermin = 0;
    document.getElementById("sec").innerHTML = counter;
    document.getElementById("min").innerHTML = countermin;
}