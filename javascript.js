  var images = new Array();
  for (var i = 2; i < 13; i++) {
	images.push("sherlock" + i + ".jpg");
  }
  var x = 0;

  function changeImage() {
	document.getElementById('vahetuv').src = images[x];
	if (x < 1) {
	  x += 1;
	} else {
	  x = 0;
	}
  }
  window.onload = function() {
	setInterval(function () {
	  changeImage();
	}, 3500);
  }