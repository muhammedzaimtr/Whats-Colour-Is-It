function WhatsColour(){
  var date = new Date(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds();
  
  minute = minute <= 9 ? '0' + minute : minute;
  
    second = second <= 9 ? '0' + second : second;

document.body.style.backgroundColor = '#' + hour + String(minute) + second;

  document.getElementById('zaman').innerHTML = hour + ':' + minute + ':' + second;
  
  document.getElementById('colorhex').innerHTML = '#' + hour + minute +  second;
  
}  

setInterval(WhatsColour,1000);