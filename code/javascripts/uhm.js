// Look... if you can get this into someone's chrome console... it'll crash their webpage in like a minute (change the 10000 to something smaller if you want it to crash quicker)
let i = "crash "; 
function thisIsDumb() { 
  document.getElementsByTagName('*')[0].textContent = i; 
  i = i + i; 
} 

setInterval(thisIsDumb, 10000);
