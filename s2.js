window.onload = function() {
  var myDiv = document.getElementById("myDiv");
  var randomX = Math.floor(Math.random() * (window.innerWidth - myDiv.offsetWidth));
  var randomY = Math.floor(Math.random() * (window.innerHeight - myDiv.offsetHeight));
  myDiv.style.position = "fixed";
  myDiv.style.top = randomY + "px";
  myDiv.style.left = randomX + "px";
};
