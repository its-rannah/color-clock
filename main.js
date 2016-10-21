var clock = document.querySelector("#color-clock");
var bkgrd = document.querySelector("body");

function time() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	// it will never get larger than 144 (60 + 60 + 24)
	var t = h + m + s;
	if (t < 60) {
		bkgrd.style.color = '#fff';
	} else if (t < 80) {
		bkgrd.style.color = '#bbb';
	} else if (t < 100) {
		bkgrd.style.color = '#999';
	} else if (t < 120) {
		bkgrd.style.color = '#333';
	} else if (t < 140) {
		bkgrd.style.color = '#000';
	}
	h = nonMilitary(h);
	m = checkTime(m);
	s = checkTime(s);
	// var normalClock = h + ":" + m + ":" + s;
	var hexClock = clock.innerHTML = "#" + h + m + s;
	color(h, m, s);
} 

function checkTime(i) {
	if(i < 10) {
		i = "0" + i;
	}
	return i;
}

function nonMilitary(j) {
	if(j > 12) {
		j = "0" + (j - 12);
	}
	return j;
}

function color(a, b, c) {
	bkgrd.style.backgroundColor = "#" + a + b + c;
}

setInterval(time, 10);