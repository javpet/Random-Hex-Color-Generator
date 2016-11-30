// generator function
  function getColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
  }
// sets background color style
  function setBackground() {
    var bgColor = getColor();
    document.body.style.background = bgColor;
  }

// sets background on load
  window.onload = setBackground();
  window.onload = hexcolor();

// runs function on click
 document.body.onkeyup = function(e){
      if(e.keyCode == 32){
        setBackground();
        hexcolor();
      }
  }

  function hexcolor() {
  document.getElementById("hex").innerHTML = '<div>' + getColor() + '</div>'
  }
