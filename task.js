var x = 1;
var y = 0;
var sum = 0;

function fibo(x, y) {
	
	sum = x + y;
	y = x;
	x = sum;
	postMessage(sum);
	fibo(x, y);
	return x, y;
		
}

addEventListener("message", function(e) {
	if (e.data == "") {
		fibo(x, y);
	} else {
		postMessage(e.data);
	}
}, true);