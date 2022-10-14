
var hour = 0;
var min = 0;
var sec = 0;
setInterval(function(){
  
  sec++
  document.getElementById("sec-box").innerHTML = sec
  document.getElementById("min-box").innerHTML= min
  document.getElementById("hr-box").innerHTML = hour
  
  if (sec >= 60) {
    sec = 0
    min++
    if(min >= 60){
        sec = 0
        min = 0
        hour++
        if(hour >= 24){
            sec = 0
            min = 0
            hour = 0
        }
    }
  }
}, 1000);
        
