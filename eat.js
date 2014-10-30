window.onload = initAll;
function initAll () {
	document.write('<div id="number">' + eat() + '</div>');
	var number = document.getElementById('number');
	number.style.color = '#77428D';
	number.style.textAlign = 'center';
	number.style.font = 'normal 480px/480px Source Han Sans, Open Sans, Microsoft Jhenghei, Microsoft Yahei, Helvetica, Arial, sans-serif';
	number.style.textShadow = '0 0 120px rgba(0,0,0,.1)';
	number.style.cursor = 'default';
}

var eat = function () {
	var num = Math.floor(Math.random()*1000).toString();
	var result;
	if (num.length == 3) {
		var get = parseInt(num.substr(0, 1)) + parseInt(num.substr(1, 1)) + parseInt(num.substr(2, 1));
		result = get % 3 + 1;
	} else {
		result = 'No!';
	}
	return result;
}