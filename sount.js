
setInterval(inter,1000)


function myFunction() {
  alert("runFunction made me run");
}

           var counter = 0;
           var minutecounter = 24;
           var hour = 7;

function inter () {
document.getElementById('second').innerHTML = counter;
document.getElementById('minute').innerHTML = minutecounter;
document.getElementById('hour').innerHTML = hour;
counter++
if (counter === 60) {
  
  counter = 0
  minutecounter++
  myFunction();
      if(minutecounter === 60)
          {
              counter = 0
              minutecounter = 0
              hour++
          }
  // clearInterval(setInterval);
}
};
